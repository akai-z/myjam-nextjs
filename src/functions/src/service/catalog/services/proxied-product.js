const product = require('./product')
const pgsqlFactory = require('./integrations/pgsql-factory')
const HttpError = require('../../../common/error/http')

const fields = [
  'id',
  'record_id',
  'name',
  'slug',
  'price',
  'special_price',
  'sku',
  'description',
  'status',
  'main_image',
  'thumbnail_image',
  'options',
  'categories'
]

async function record(slug) {
  const filter = `${product.identifierField} = $1`
  const pgsql = pgsqlFactory.create()
  const result = await pgsql.record(product.tableName, filter, [slug], queryFields())

  if (!result) {
    throw new HttpError(404, `Could not find the product "${slug}"`)
  }

  return result
}

async function listByIds(ids, pageNumber, pageSize = product.defaultListPageSize) {
  const filter = `${product.idField} = ANY($4::varchar[])`
  return await list(pageNumber, pageSize, filter, [ids])
}

async function listByIdsSize(ids) {
  const filter = `${product.idField} = ANY($4::varchar[])`
  return await listSize(filter, [ids])
}

async function listByType(type, pageNumber, pageSize = product.defaultListPageSize) {
  validateType(type)
  return await list(pageNumber, pageSize, type)
}

async function listByTypeSize(type) {
  validateType(type)
  return await listSize(type)
}

async function list(
  pageNumber,
  pageSize = product.defaultListPageSize,
  filter = '',
  filterValues = [],
  maxPageSize = product.defaultListPageSize
) {
  const pgsql = pgsqlFactory.create()

  pageSize = parseInt(pageSize)
  pageSize = pageSize > maxPageSize ? maxPageSize : pageSize

  return await pgsql.list(product.tableName, pageNumber, pageSize, filter, filterValues, queryFields())
}

async function listSize(filter = '', filterValues = []) {
  const pgsql = pgsqlFactory.create(product.idField)
  return await pgsql.listSize(product.tableName, filter, filterValues)
}

function validateType(type) {
  if (!product.validTypes.includes(type)) {
    throw new HttpError(400, 'Invalid product type')
  }
}

function queryFields() {
  return fields.join(', ')
}

module.exports = {
  record,
  listByIds,
  listByIdsSize,
  listByType,
  listByTypeSize,
  list,
  listSize
}
