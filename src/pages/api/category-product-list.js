const { httpMethods, query, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const category = require('../../functions/src/service/catalog/services/category')

const allowedHttpMethods = ['GET']
const requiredParams = ['category-slug']

export default function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    query.validate(req.query, requiredParams)

    const offset = 'offset' in req.query ? req.query.offset : null
    const productList = await category.products(req.query['category-slug'], offset)

    return response.json(productList)
  } catch (err) {
    return response.error(err)
  }
}
