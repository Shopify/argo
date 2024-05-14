API_VERSION=$1
DOCS_PATH=docs/surfaces/point-of-sale
SRC_PATH=src/surfaces/point-of-sale

fail_and_exit() {
  echo "** Failed to generate docs"
  echo "See https://vault.shopify.io/page/Extension-Docs~SkgE.md"
  exit $1
}

if [ -z $API_VERSION ]
then
  API_VERSION="unstable"
  echo "Building docs for 'unstable' POS UI extensions API. You can add a calver version argument (e.g. 'yarn docs:point-of-sale 2024-01') to generate the docs for a stable version."
else
  echo "Building docs for '$API_VERSION' POS UI extensions API."
  echo "When generating docs for a stable version, 'unstable' docs are not regenerated. This avoids overwriting other unstable changes that are not included in this version."
  echo "If you need to update the 'unstable' version, run this command again without the '$API_VERSION' parameter."
fi

COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

# Remove .doc.js files
find ./ -name '*.doc*.js' -exec rm -r {} \;
find ./ -wholename '*/point-of-sale/reference/helpers/*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  fail_and_exit $build_exit
fi


# Make sure https://shopify.dev URLs are relative so they work in Spin.
# See https://github.com/Shopify/generate-docs/issues/181
sed -i 's/https:\/\/shopify.dev//gi' ./$DOCS_PATH/generated/generated_docs_data.json
sed_exit=$?
if [ $sed_exit -ne 0 ]; then
  fail_and_exit $sed_exit
fi

if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then

    mkdir -p ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/pos_ui_extensions/$API_VERSION
    cp ./$DOCS_PATH/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/pos_ui_extensions/$API_VERSION
    # Replace 'unstable' with the exact API version in relative doc links
    sed -i \
      "s/\/docs\/api\/pos-ui-extensions\/unstable/\/docs\/api\/pos-ui-extensions\/$API_VERSION/gi" \
      ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/pos_ui_extensions/$API_VERSION/generated_docs_data.json
    sed_exit=$?
    if [ $sed_exit -ne 0 ]; then
      fail_and_exit $sed_exit
    fi
    rsync -a --delete ./$DOCS_PATH/screenshots/ ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/pos-ui-extensions/$API_VERSION

    cd ~/src/github.com/Shopify/shopify-dev

    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/pos-ui-extensions"
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./$DOCS_PATH/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi
