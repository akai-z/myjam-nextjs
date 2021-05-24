const { httpMethods, pathParams, response } = require('./src/common/functions/bootstrap')
const category = require('./src/service/catalog/services/category')

const allowedHttpMethods = ['GET']
const requiredParams = ['category-slug']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const params = pathParams.params(event.path, requiredParams)
    const offset = 'offset' in params ? decodeURIComponent(params['offset']) : null
    const productList = await category.products(params['category-slug'], offset)

    return response.cachedResponse(response.json(productList))
  } catch (err) {
    return response.error(err)
  }
}
