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

module.exports = {
  category,
  list,
  products
}
