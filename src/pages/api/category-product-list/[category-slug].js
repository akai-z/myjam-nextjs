const { httpMethods, responseFactory } = require('../../../functions/src/common/functions/bootstrap')
const category = require('../../../functions/src/service/catalog/services/category')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res, true)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const offset = 'offset' in req.query ? req.query.offset : null
    const productList = await category.products(req.query['category-slug'], offset)

    response.json(productList)
  } catch (err) {
    response.error(err)
  }
}
