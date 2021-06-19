const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const productIndexer = require('../../functions/src/service/catalog/services/product/indexer')

const allowedHttpMethods = ['GET']

module.exports = async (req, res) => {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    await productIndexer.indexData()

    response.success()
  } catch (err) {
    response.error(err)
  }
}
