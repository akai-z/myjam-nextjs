const HttpError = require('../../../../common/error/http')

class Algolia {
  constructor(index) {
    this.index = index
  }

  async indexData(data) {
    try {
      await this.index.saveObjects(data)
    } catch (err) {
      console.log(err)
      throw new HttpError(500, 'Data Indexing Failed')
    }
  }
}

module.exports = Algolia
