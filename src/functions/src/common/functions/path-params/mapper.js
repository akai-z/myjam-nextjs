const HttpError = require('../../error/http')

function mappedParams(params, requiredParams = []) {
  const paramsLength = params.length

  if (paramsLength === 1) {
    return params
  }

  if (paramsLength % 2 !== 0) {
    throw new HttpError(400)
  }

  const resolvedParams = {}

  for (let paramIndex = 0; paramIndex < paramsLength; paramIndex++) {
    if ((paramIndex + 1) % 2 === 0) {
      resolvedParams[params[paramIndex - 1]] = params[paramIndex]
    }
  }

  for (const requiredParam of requiredParams) {
    if (!(requiredParam in resolvedParams)) {
      throw new HttpError(400, `${requiredParam} is required`)
    }
  }

  return resolvedParams
}

module.exports = {
  mappedParams
}
