const { Client } = require('pg')
const SyncInc = require('./syncinc')

const clientInfo = {
  host: process.env.SYNCINC_HOST || 'evening-soiree.syncincdb.com',
  user: process.env.CATALOG_SYNCINC_PRODUCTS_USER,
  password: process.env.CATALOG_SYNCINC_PRODUCTS_PASSWORD,
  database: process.env.CATALOG_SYNCINC_PRODUCTS_DB,
  port: process.env.SYNCINC_PORT || 5432
}

function create(idField = null) {
  return new SyncInc(createClient(), idField)
}

function createClient() {
  return new Client(clientInfo)
}

module.exports = {
  create
}