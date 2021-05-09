const airtable = require('airtable')
const got = require('got')
const HttpError = require('../../../../common/error/http')

const apiBaseUrl = 'https://api.airtable.com/v0/'
const defaultView = 'Grid view'

async function findRecordByField(table, fieldName, fieldValue) {
  const selectParams = {
    filter: '{' + fieldName + '} = "' + fieldValue + '"',
    maxRecords: 1
  }

  const record = await listAllRecords(table, selectParams)

  if (!record.length) {
    throw new HttpError(400, `Invalid "${fieldName}" value "${fieldValue}"`)
  }

  return record[0]
}

async function listAllRecords(table, selectParams = {}) {
  return await tableSelect(table, selectParams).all()
}

async function listRecords(table, params = {}) {
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' }
  const response = await apiRequest('GET', table, params, headers)

  return response
}

async function apiRequest(httpMethod, table, params = {}, headers = null, body = null) {
  const config = {
    method: httpMethod,
    headers: { 'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY },
    prefixUrl: apiUrl(),
    searchParams: selectParams(params)
  }

  if (headers !== null) {
    config.headers = { ...config.headers, ...headers }
  }

  if (body !== null) {
    config.body = body
  }

  try {
    return await got(table, config).json()
  } catch (err) {
    console.log(err.response.statusCode)
    console.log(err.response.body)

    throw new HttpError(err.response.statusCode || 500, 'DB Error')
  }
}

function apiUrl() {
  return apiBaseUrl + process.env.AIRTABLE_CATALOG_BASE_ID
}

function base(table) {
  return airtable.base(process.env.AIRTABLE_CATALOG_BASE_ID)(table)
}

function tableSelect(table, params = {}) {
  return base(table).select(selectParams(params))
}

function selectParams(params = {}) {
  const resolvedParams = { view: defaultView }

  if (!params) {
    return resolvedParams
  }

  if (params.view) {
    resolvedParams.view = params.view
  }

  if (params.fields) {
    resolvedParams.fields = params.fields
  }

  if (params.filter) {
    resolvedParams.filterByFormula = params.filter
  }

  if (params.maxRecords) {
    resolvedParams.maxRecords = params.maxRecords
  }

  if (params.pageSize) {
    resolvedParams.pageSize = params.pageSize
  }

  if (params.offset) {
    resolvedParams.offset = params.offset
  }

  return resolvedParams
}

module.exports = {
  findRecordByField,
  listAllRecords,
  listRecords
}
