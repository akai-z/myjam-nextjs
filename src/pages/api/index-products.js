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

    'is_update' in req.query ? await productIndexer.reindexData() : await productIndexer.indexData()

    response.success('Products index request has been submitted successfully.')
  } catch (err) {
    response.error(err)
  }
}
