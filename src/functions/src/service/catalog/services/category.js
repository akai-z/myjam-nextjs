const airtable = require('./integrations/airtable')
const product = require('./product')

const tableName = 'categories'

async function category(slug) {
  return await airtable.findRecordByField(tableName, 'slug', slug)
}

async function list() {
  const selectParams = { filter: '{status} = "enabled"' }
  return await airtable.listAllRecords(tableName, selectParams)
}

async function products(categorySlug, listOffset = null) {
  const categoryData = await category(categorySlug)

  return 'items' in categoryData.fields
    ? await product.listByIds(categoryData.fields.items, listOffset) : {}
}

async function proxiedProducts(categorySlug, pageNumber, pageSize = product.defaultListPageSize) {
  const categoryData = await category(categorySlug)
  const products = 'items' in categoryData.fields
    ? await proxiedProduct.listByIds(categoryData.fields.items, pageNumber, pageSize) : {}

  return products
}

async function proxiedProductsSize(categorySlug) {
  const categoryData = await category(categorySlug)
  const size = 'items' in categoryData.fields ? categoryData.fields.items.length : 0

  return { count: size }
}

module.exports = {
  category,
  list,
  products,
  proxiedProducts,
  proxiedProductsSize
}
