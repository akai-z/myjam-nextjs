const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const config = require('../../functions/src/service/catalog/services/config')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    const configList = await config.list()

    response.json(configList)
  } catch (err) {
    response.error(err)
  }
}
