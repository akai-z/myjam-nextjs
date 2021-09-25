function createVercelRequest(req) {
  const Request = require('./request/vercel')
  return new Request(req)
}

module.exports = {
  createVercelRequest
}
