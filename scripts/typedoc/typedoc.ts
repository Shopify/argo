import * as path from 'path';
import * as fs from 'fs';

import type {ImportedReference} from './types';
import {createDependencyGraph, Module} from './utilities/dependency-graph';

run();

async function run() {
  const componentIndex = path.resolve(
    'packages/argo-checkout/src/components/index.ts',
  );

  const graph = await createDependencyGraph(componentIndex);

  // Get de-duped component directories as they should be 1:1 with README files.
  const resolvedComponentDirs = [
    ...new Set(
      [...graph.get(componentIndex)!.exports.values()].map(({path}: any) =>
        path.substring(0, path.length - 9),
      ),
    ),
  ];

  // Loop through each directory, get all exports from the index, and build docs.
  resolvedComponentDirs.forEach((directory) => {
    const exports = [] as any;
    graph.get(`${directory}/index.ts`)!.exports.forEach((value, key) => {
      const resolved = resolveImport(value as any, graph) as any;

      if (resolved.value.name == null) {
        resolved.value.name = key;
      }

      exports.push(resolved);
    });

    // Find the components in the exports. This uses Array#filter because FormLayout has 2 components.
    const components = exports.filter(
      ({value}: any) => value.kind === 'Component',
    );

    let markdown = '';

    // Go through each component and build a README.md with the component name and doc content.
    // Find the component props and recursively build the props table.
    // Nested interfaces are rendered as nested tables in the type column.
    components.forEach(({value: {name, docs, props}}: any) => {
      markdown += `# ${name}\n${docs ? strip(docs.content) : ''}`;

      const {
        value: {properties},
      } = exports.find(({value}: any) => value.name === props.name);

      if (properties.length > 0) {
        markdown += '## Props\nrequired = *\n';
        markdown += propsTable(properties, exports, directory);
      }
    });

    fs.writeFile(`${directory}/README.md`, markdown, function (err) {
      if (err) throw err;
    });
  });
}

function propsTable(properties: any, exports: any, dir: string) {
  let tableMarkdown =
    '<table><tr><th>Name</th><th>Type</th><th>Description</th></tr>';

  properties.forEach(({name, optional, value, docs}: any) => {
    tableMarkdown += `<tr><td>${name}${optional ? '' : '*'}</td><td>${propType(
      value,
      exports,
      dir,
    )}</td><td>${
      docs ? strip(docs.content).replace(/(\r\n|\n|\r)/gm, '') : ''
    }</td></tr>`;
  });

  tableMarkdown += '</table>';

  return tableMarkdown;
}

function propType(value: any, exports: any[], dir: string): any {
  switch (value.kind) {
    case 'StringType':
      return '<code>string</code>';
    case 'BooleanType':
      return '<code>boolean</code>';
    case 'ArrayType':
      return `Array of ${propType(value.elements, exports, dir)}`;
    case 'NumberType':
      return '<code>number</code>';
    case 'Local':
      // eslint-disable-next-line no-case-declarations
      const local = exports.find(
        ({value: exportValue}: any) => exportValue.name === value.name,
      );
      if (local == null) {
        throw new Error(
          `Can’t resolve export type \`${value.name}\` in ${dir}/index.ts. It’s probably not exported from the component index.`,
        );
      }
      return propType(local.value, exports, dir);
    case 'InterfaceType':
      return propsTable(value.properties, exports, dir);
    case 'UnionType':
      return value.types
        .map((type: any) => {
          return propType(type, exports, dir);
        })
        .join(' | ');
    case 'StringLiteralType':
      return `<code>"${value.value}"</code>`;
    case 'NumberLiteralType':
      return `<code>${value.value}</code>`;
    case 'FunctionType':
      return `<code>(${paramsType(value.parameters)}) => ${returnType(
        value.returnType.kind,
      )}</code>`;
    default:
      return `<pre>${JSON.stringify(value, null, 2)}</pre>`;
  }
}

function returnType(type: string) {
  switch (type) {
    case 'VoidType':
      return 'void';
    default:
      return type;
  }
}

function argType(type: string) {
  switch (type) {
    case 'BooleanType':
      return 'boolean';
    case 'StringType':
      return 'string';
    default:
      return type;
  }
}

function paramsType(params: any[]) {
  return params
    .map((param) => `${param.name}: ${argType(param.type.kind)}`)
    .join(', ');
}

function resolveImport(
  {name, path}: Pick<ImportedReference, 'name' | 'path'>,
  modules: Map<string, Module>,
) {
  let resolvePath = path;
  let resolveName = name;

  while (true) {
    const module = modules.get(resolvePath);
    const resolved = module?.exports.get(resolveName);

    if (resolved == null) {
      throw new Error(
        `Can’t resolve export ${resolveName} in ${JSON.stringify(resolvePath)}`,
      );
    } else if (resolved.kind === 'Imported') {
      resolvePath = resolved.path;
      resolveName = resolved.name;
    } else {
      return {value: resolved, module};
    }
  }
}

function strip(content: string) {
  return escapeHTML(
    content
      .replace('/**', '')
      .replace('*/', '')
      .replace('\n * ', '\n')
      .replace('\n *', '\n')
      .replace('\n\n * ', '\n\n'),
  );
}

function escapeHTML(html: string) {
  const chars: {[key: string]: string} = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
  };
  return html.replace(/[&<>"]/g, (tag: string) => chars[tag] || tag);
}
