const NextAuthSession = require('./session')

function create(req) {
  return new NextAuthSession(req)
}

module.exports = {
  create
}
