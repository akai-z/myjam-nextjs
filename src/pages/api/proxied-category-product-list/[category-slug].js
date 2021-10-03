const { httpMethods, responseFactory } = require('../../../functions/src/common/functions/bootstrap')
const category = require('../../../functions/src/service/catalog/services/category')
const product = require('../../../functions/src/service/catalog/services/product')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const pageNumber = 'page-number' in req.query ? req.query['page-number'] : 1
    const pageSize = 'page-size' in req.query ? req.query['page-size'] : product.defaultListPageSize

    const result = 'size' in req.query
      ? await category.proxiedProductsSize(req.query['category-slug'])
      : await category.proxiedProducts(req.query['category-slug'], pageNumber, pageSize)

    response.json(result)
  } catch (err) {
    response.error(err)
  }
}
