const HttpError = require('../error/http')

function validate(params, requiredParams) {
  for (const requiredParam of requiredParams) {
    if (!(requiredParam in params)) {
      throw new HttpError(400, `"${requiredParam}" is required`)
    }
  }
}

module.exports = {
  validate
}
