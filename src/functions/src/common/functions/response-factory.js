function createNetlifyResponse(httpMethod = 'GET', skipCache = false) {
  const Response = require('./response/netlify')
  return new Response(httpMethod, skipCache)
}

function createVercelResponse(res, httpMethod = 'GET', skipCache = false) {
  const Response = require('./response/vercel')
  return new Response(res, httpMethod, skipCache)
}

module.exports = {
  createNetlifyResponse,
  createVercelResponse
}
