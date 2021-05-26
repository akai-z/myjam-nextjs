function createNetlifyResponse(httpMethod = 'GET', skipCache = false) {
  const Response = require('./response/netlify')
  return new Response(httpMethod, skipCache)
}

function createVercelResponse(res, skipCache = false) {
  const Response = require('./response/vercel')
  return new Response(res, skipCache)
}

module.exports = {
  createNetlifyResponse,
  createVercelResponse
}
