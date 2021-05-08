const HttpError = require('../error/http')

function validate(method, allowedMethods) {
  if (!allowedMethods.includes(method)) {
    throw new HttpError(405, 'Method Not Allowed')
  }
}

module.exports = {
  validate
}
