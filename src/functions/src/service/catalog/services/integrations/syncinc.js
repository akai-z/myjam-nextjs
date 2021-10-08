const HttpError = require('../../../../common/error/http')

class SyncInc {
  constructor(client, idField = null) {
    this.client = client
    this.idField = idField
  }

  async record(table, filter, filterValues) {
    const query = `SELECT * FROM public.${table}${this.prepareFilter(filter)} LIMIT 1`
    const result = await this.runQuery(query, filterValues)

    return result['rows'] ? result['rows'][0] : result['rows']
  }

  async list(table, pageNumber, pageSize, filter = '', filterValues = []) {
    const queryValues = [pageSize, pageNumber, pageSize, ...filterValues]
    const query = `SELECT * FROM public.${table}${this.prepareFilter(filter)} LIMIT $1 OFFSET ($2 - 1) * $3`

    const result = await this.runQuery(query, queryValues)

    return result['rows']
  }

  async listSize(table, filter = '', filterValues = []) {
    const queryValues = [...filterValues]
    const query = `SELECT count(${this.idField}) FROM public.${table}${this.prepareFilter(filter)}`

    const result = await this.runQuery(query, queryValues)

    return result['rows'][0]
  }

  prepareFilter(filter = '') {
    return filter ? ` WHERE ${filter}` : filter
  }

  async runQuery(query, values) {
    try {
      this.client.connect()
      return await this.client.query(query, values)
    } catch (err) {
      console.log(err.stack)
      throw new HttpError(500, 'Failed to run query')
    }
  }
}

module.exports = SyncInc
