const algoliasearch = require('algoliasearch')
const Algolia = require('./algolia')

function create(indexName) {
  const client = algoliasearch(
    process.env.CATALOG_ALGOLIA_APPLICATION_ID,
    process.env.CATALOG_ALGOLIA_ADMIN_API_KEY
  )

  return new Algolia(client.initIndex(indexName))
}

module.exports = {
  create
}
