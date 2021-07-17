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

  return await list(filter, offset)
}

async function listAll(filter = null, filterLogicalOperator = 'AND') {
  const selectParams = filterParams(filter, filterLogicalOperator)
  return await airtable.listAllRecords(tableName, selectParams)
}

async function list(filter = null, offset = null, filterLogicalOperator = 'AND') {
  const selectParams = filterParams(filter, filterLogicalOperator)
  selectParams.pageSize = defaultListPageSize

  if (offset) {
    selectParams.offset = offset
  }

  return await airtable.listRecords(tableName, selectParams)
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
