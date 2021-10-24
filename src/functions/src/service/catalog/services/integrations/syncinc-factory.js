const { Pool } = require('pg')
const SyncInc = require('./syncinc')

const connectionInfo = {
  host: process.env.SYNCINC_HOST || 'evening-soiree.syncincdb.com',
  user: process.env.CATALOG_SYNCINC_PRODUCTS_USER,
  password: process.env.CATALOG_SYNCINC_PRODUCTS_PASSWORD,
  database: process.env.CATALOG_SYNCINC_PRODUCTS_DB,
  port: process.env.SYNCINC_PORT || 5432
}

function create(idField = null) {
  return new SyncInc(createPool(), idField)
}

function createPool() {
  return new Pool(connectionInfo)
}

module.exports = {
  create
}
