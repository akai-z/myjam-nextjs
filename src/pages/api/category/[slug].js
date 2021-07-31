const { httpMethods, responseFactory } = require('../../../functions/src/common/functions/bootstrap')
const category = require('../../../functions/src/service/catalog/services/category')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    const categoryData = await category.category(req.query.slug)

    response.json(categoryData)
  } catch (err) {
    response.error(err)
  }
}
