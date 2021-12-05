const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const productOption = require('../../functions/src/service/catalog/services/product/option')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    const optionList = await productOption.list()

    response.json(optionList)
  } catch (err) {
    response.error(err)
  }
}
