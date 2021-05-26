const { httpMethods, query, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const category = require('../../functions/src/service/catalog/services/category')

const allowedHttpMethods = ['GET']
const requiredParams = ['slug']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    query.validate(req.query, requiredParams)

    const categoryData = await category.category(req.query.slug)

    return response.json(categoryData)
  } catch (err) {
    return response.error(err)
  }
}
