const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const productIndexer = require('../../functions/src/service/catalog/services/product/indexer')
const { getSession } = require('next-auth/client')

const allowedHttpMethods = ['GET']
const authPath = 'auth/signin/auth0'

module.exports = async (req, res) => {
  const response = responseFactory.createVercelResponse(res)
  const session = await getSession({ req })

  if (!session) {
    return res.redirect(authPath)
  }

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    'is_update' in req.query ?  await productIndexer.reindexData() : await productIndexer.indexData()

    response.success()
  } catch (err) {
    response.error(err)
  }
}
