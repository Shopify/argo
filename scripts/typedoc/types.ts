export interface Packages {
  [key: string]: string;
}

export interface Paths {
  inputRoot: string;
  outputRoot: string;
  packages: Packages;
  shopifyDevUrl: string;
  shopifyDevAssets?: string;
}

export interface Tag {
  name: string;
  content: string;
}

export interface Documentation {
  content: string;
  tags?: Tag[];
}

export interface Documentable {
  docs?: Documentation;
}

export interface LocalReference {
  kind: 'Local';
  name: string;
  params?: (LocalReference | Exportable)[];
}

export interface ImportedReference {
  kind: 'Imported';
  name: string;
  path: string;
}

export interface InterfaceType extends Documentable {
  kind: 'InterfaceType';
  name: string;
  properties: PropertySignature[];
}

export interface PropertySignature extends Documentable {
  kind: 'PropertySignature';
  optional?: boolean;
  name: string;
  value: Type;
  parameters?: ParameterType[];
}

export interface TypeLiteral extends Documentable {
  kind: 'TypeLiteral';
  properties: PropertySignature[];
}

export interface StringType {
  kind: 'StringType';
}

export interface BooleanType {
  kind: 'BooleanType';
}

export interface NumberType {
  kind: 'NumberType';
}

export interface VoidType {
  kind: 'VoidType';
}

export interface UndefinedType {
  kind: 'UndefinedType';
}

export interface NullType {
  kind: 'NullType';
}

export interface UnknownType {
  kind: 'UnknownType';
}

export interface AnyType {
  kind: 'AnyType';
}

export interface UndocumentedType {
  kind: 'UndocumentedType';
}

export interface StringLiteralType {
  kind: 'StringLiteralType';
  value: string;
}

export interface NumberLiteralType {
  kind: 'NumberLiteralType';
  value: number;
}

export interface BooleanLiteralType {
  kind: 'BooleanLiteralType';
  value: boolean;
}

export interface ArrayType {
  kind: 'ArrayType';
  elements: Type;
}

export interface UnionType {
  kind: 'UnionType';
  types: Type[];
}

export interface ParameterType {
  kind: 'ParameterType';
  name: string;
  rest: boolean;
  type: Type;
}

export interface FunctionType {
  kind: 'FunctionType';
  parameters: ParameterType[];
  returnType: Type;
}

export interface MappedType {
  kind: 'MappedType';
  ref: string;
  mapping: string;
}

export interface NeverKeyword {
  kind: 'NeverKeyword';
}

export interface TypeParameter {
  kind: 'TypeParameter';
  constraint?: string;
  default?: string;
}

export interface ExtendsType {
  kind: 'Extends';
  extends: string;
}

export type Type =
  | UnionType
  | InterfaceType
  | StringLiteralType
  | StringType
  | BooleanType
  | BooleanLiteralType
  | NumberType
  | NumberLiteralType
  | FunctionType
  | MappedType
  | TypeParameter
  | ExtendsType
  | VoidType
  | UndefinedType
  | NullType
  | ArrayType
  | UnknownType
  | AnyType
  | TypeLiteral
  | NeverKeyword
  | UndocumentedType
  | LocalReference;

export type RemoteComponentProps = LocalReference | InterfaceType;

export interface RemoteComponent extends Documentable {
  kind: 'Component';
  name: string;
  props?: RemoteComponentProps;
}

export type Exportable = RemoteComponent | Type | ImportedReference;
