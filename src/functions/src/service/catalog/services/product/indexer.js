const algoliaFactory = require('../integrations/algolia-factory')
const product = require('../product')

async function indexData(dateFilter = null) {
  const products = await product.listAll(dateFilter)
  if (!products.length) {
    return
  }

  const productsData = []
  for (const product of products) {
    product.fields['objectID'] = product.fields['slug']
    productsData.push(product.fields)
  }

  const algolia = algoliaFactory.create(process.env.CATALOG_ALGOLIA_PRODUCTS_INDEX)
  await algolia.indexData(productsData)
}

async function reindexData() {
  await indexData('LAST_MODIFIED_TIME() >= TODAY()')
}

module.exports = {
  indexData,
  reindexData
}
