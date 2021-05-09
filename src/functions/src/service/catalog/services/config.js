const airtable = require('./integrations/airtable')

const tableName = 'configuration'

async function list() {
  const selectParams = { filter: '{status} = "enabled"' }
  const configItems = await airtable.listAllRecords(tableName, selectParams)

  return configItems
}

module.exports = {
  list
}
