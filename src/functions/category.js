const { httpMethods, pathParams, responseFactory } = require('./src/common/functions/bootstrap')
const category = require('./src/service/catalog/services/category')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse()

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const slug = pathParams.param(event.path)
    const categoryData = await category.category(slug)

    return response.json(categoryData)
  } catch (err) {
    return response.error(err)
  }
}
