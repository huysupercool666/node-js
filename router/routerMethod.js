const url = require("url");
const { method } = require("../common/utils");
const routerMethods = {
  get: function (request, response, path, callback) {
    if (
      path === url.parse(request.url, true).pathname &&
      request.method === method.get
    ) {
      callback(request, response);
    }
  },
  post: function (request, response, path, callback) {
    if (
      path === url.parse(request.url, true).pathname &&
      request.method === method.post
    ) {
      callback(request, response);
    }
  },
  delete: function (request, response, path, callback) {
    if (
      path === url.parse(request.url, true).pathname &&
      request.method === method.delete
    ) {
      callback(request, response);
    }
  },
  patch: function (request, response, path, callback) {
    if (
      path === url.parse(request.url, true).pathname &&
      request.method === method.patch
    ) {
      callback(request, response);
    }
  },
};

module.exports = routerMethods;
