const productIndexer = require('../../functions/src/service/catalog/services/product/indexer')
const {
  httpMethods,
  nextAuthSessionFactory,
  responseFactory
} = require('../../functions/src/common/functions/bootstrap')

const allowedHttpMethods = ['GET']

module.exports = async (req, res) => {
  const response = responseFactory.createVercelResponse(res, req.method, true)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const session = nextAuthSessionFactory.create(req)
    const isLoggedIn = await session.isLoggedIn()

    if (!isLoggedIn) {
      return res.redirect(session.callbackUrl())
    }

    switch (req.query) {
      case 'is_update':
        await productIndexer.reindexData()
        break
      case 'clear':
        await productIndexer.clearData()
        break
      default:
        await productIndexer.indexData()
    }

    response.success('Products data indexing request has been submitted successfully.')
  } catch (err) {
    response.error(err)
  }
}
