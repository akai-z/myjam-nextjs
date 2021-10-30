const { Pool } = require('pg')
const PgSql = require('./pgsql')

const schema = process.env.CATALOG_SYNCINC_SCHEMA || 'airtable'

const connectionInfo = {
  host: process.env.SYNCINC_HOST || 'evening-soiree.syncincdb.com',
  user: process.env.CATALOG_SYNCINC_PRODUCTS_USER,
  password: process.env.CATALOG_SYNCINC_PRODUCTS_PASSWORD,
  database: process.env.CATALOG_SYNCINC_PRODUCTS_DB,
  port: process.env.SYNCINC_PORT || 5432,
  ssl: {
    rejectUnauthorized: false
  }
}

function create(idField = null) {
  return new PgSql(createPool(), schema, idField)
}

function createPool() {
  return new Pool(connectionInfo)
}

module.exports = {
  create
}
