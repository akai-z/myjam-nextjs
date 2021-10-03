const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const product = require('../../functions/src/service/catalog/services/product')
const proxiedProduct = require('../../functions/src/service/catalog/services/proxied-product')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const pageNumber = 'page-number' in req.query ? req.query['page-number'] : 1
    const pageSize = 'page-size' in req.query ? req.query['page-size'] : product.defaultListPageSize

    if ('type' in req.query) {
      const result = 'size' in req.query
        ? await proxiedProduct.listByTypeSize(req.query.type)
        : await proxiedProduct.listByType(req.query.type, pageNumber, pageSize)

        response.json(result)
        return
    }

    const result = 'size' in req.query
      ? await proxiedProduct.listSize()
      : await proxiedProduct.list(pageNumber, pageSize)

    response.json(result)
  } catch (err) {
    response.error(err)
  }
}
