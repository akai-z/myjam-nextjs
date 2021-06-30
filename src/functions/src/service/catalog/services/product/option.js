const airtable = require('../integrations/airtable')

const tableName = 'item_options'

async function list() {
  const categories = await airtable.listAllRecords(tableName)
  return categories
}

module.exports = {
  list
}
