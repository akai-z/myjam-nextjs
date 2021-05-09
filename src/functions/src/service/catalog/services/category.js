const airtable = require('./integrations/airtable')
const product = require('./product')

const tableName = 'categories'

async function category(slug) {
  return await airtable.findRecordByField(tableName, 'slug', slug)
}

async function list() {
  const selectParams = { filter: '{status} = "enabled"' }
  const categories = await airtable.listAllRecords(tableName, selectParams)

  return categories
}

async function products(categorySlug, listOffset = null) {
  const categoryData = await category(categorySlug)
  const products = await product.listByIds(categoryData.fields.items, listOffset)

  return products
}

module.exports = {
  category,
  list,
  products
}
