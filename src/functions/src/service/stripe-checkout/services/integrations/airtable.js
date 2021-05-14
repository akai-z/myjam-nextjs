const airtable = require('airtable')

const bulkActionRecordsLimit = 10
const bulkActionChunkDelay = 1000 // In milliseconds.

async function createRecord(table, data) {
  if (!isBulkActionRecordsAboveLimit(data)) {
    return await base(table).create(data)
  }

  const chunks = bulkActionRecordsChunks(data)
  const records = []
  let chunkRecords

  table = base(table)

  for (let i = 0; i < chunks.length; i++) {
    chunkRecords = await table.create(chunks[i])
    records.push(...chunkRecords)

    if (chunks[i + 1]) {
      await setBulkActionChunkDelay()
    }
  }

  return records
}

async function findRecordByField(table, fieldName, fieldValue) {
  const selectParams = {
    filter: `${fieldName} = "${fieldValue}"`,
    maxRecords: 1
  }

  const record = await listRecords(table, selectParams)

  return record[0] || null
}

function bulkActionRecordsChunks(array) {
  const chunks = []
  const chunkSize = bulkActionRecordsLimit < 1 ? 1 : bulkActionRecordsLimit

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  return chunks
}

function isBulkActionRecordsAboveLimit(data) {
  return Array.isArray(data) && data.length > bulkActionRecordsLimit
}

function setBulkActionChunkDelay() {
  return new Promise(resolve => { setTimeout(resolve, bulkActionChunkDelay) })
}

async function listRecords(table, selectParams = {}) {
  return await tableSelect(table, selectParams).all()
}

function tableSelect(table, params = {}) {
  const selectParams = {}

  if (params.view) {
    selectParams.view = params.view
  }

  if (params.fields) {
    selectParams.fields = params.fields
  }

  if (params.filter) {
    selectParams.filterByFormula = params.filter
  }

  if (params.maxRecords) {
    selectParams.maxRecords = params.maxRecords
  }

  return base(table).select(selectParams)
}

function base(table) {
  return airtable.base(process.env.AIRTABLE_ORDER_BASE_ID)(table)
}

module.exports = {
  createRecord,
  findRecordByField
}
