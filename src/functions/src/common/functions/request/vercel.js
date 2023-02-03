'use strict';

class Request {
  constructor(req) {
    this.req = req;
  }

  rawBody() {
    return new Promise((resolve, reject) => {
      const body = [];

      this.req
        .on('data', (chunk) => body.push(chunk))
        .on('end', () => {
          const rawBody = Buffer.concat(body).toString('utf8');
          resolve(rawBody);
        });
    });
  }
}

module.exports = Request;
