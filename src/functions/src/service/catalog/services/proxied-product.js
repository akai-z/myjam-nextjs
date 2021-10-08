const product = require('./product')
const syncincFactory = require('./integrations/syncinc-factory')
const HttpError = require('../../../common/error/http')

async function record(slug) {
  const filter = `${product.identifierField} = $1`
  const syncInc = syncincFactory.create()
  const result = await syncInc.record(product.tableName, filter, [slug])

  if (!result) {
    throw new HttpError(400, `Invalid product slug "${slug}"`)
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

async function list(pageNumber, pageSize = product.defaultListPageSize, filter = '', filterValues = []) {
  const syncInc = syncincFactory.create()
  pageSize = pageSize > product.defaultListPageSize ? product.defaultListPageSize : pageSize

  return await syncInc.list(product.tableName, pageNumber, pageSize, filter, filterValues)
}

async function listSize(filter = '', filterValues = []) {
  const syncInc = syncincFactory.create(product.idField)
  return await syncInc.listSize(product.tableName, filter, filterValues)
}

function validateType(type) {
  if (!product.validTypes.includes(type)) {
    throw new HttpError(400, 'Invalid product type')
  }
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
