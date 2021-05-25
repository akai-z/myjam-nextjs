function createNetlifyResponse(httpMethod = 'GET', skipCache = false) {
  const Response = require('./response/netlify')
  return new Response(httpMethod, skipCache)
}

module.exports = {
  createNetlifyResponse
}
