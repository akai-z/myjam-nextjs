const airtable = require('./integrations/airtable')

const tableName = 'items'
const defaultListPageSize = process.env.PRODUCT_LIST_PAGE_SIZE || 50

async function product(slug) {
  return await airtable.findRecordByField(tableName, 'slug', slug)
}

async function listByIds(ids, offset = null) {
  return await listByIdentifiers('RECORD_ID()', ids, offset)
}

async function listByType(type) {
  return await listAll(`{${type}} = 1`)
}

async function listByIdentifiers(identifierName, identifierValues, offset = null) {
  const identifiersFilter = []

  for (const identifierValue of identifierValues) {
    identifiersFilter.push(`${identifierName} = "${identifierValue}"`)
  }

  const filter = 'OR(' + identifiersFilter.join(', ') + ')'
  const products = await list(filter, offset)

  return products
}

async function listAll(filter = null, filterLogicalOperator = 'AND') {
  const selectParams = filterParams(filter, filterLogicalOperator)
  const products = await airtable.listAllRecords(tableName, selectParams)

  return products
}

async function list(filter = null, offset = null, filterLogicalOperator = 'AND') {
  const selectParams = filterParams(filter, filterLogicalOperator)

  selectParams.pageSize = defaultListPageSize

  if (offset) {
    selectParams.offset = offset
  }

  const products = await airtable.listRecords(tableName, selectParams)

  return products
}

function filterParams(filter = null, filterLogicalOperator = 'AND') {
  const params = { filter: '{status} = "enabled"' }

  if (filter) {
    params.filter = `${filterLogicalOperator}(${params.filter}, ${filter})`
  }

  return params
}

module.exports = {
  product,
  listByIds,
  listByType,
  listAll
}
