const url = require("url");
let routerMethods = {
  get: function (request, response, path, callback) {
    if (path === url.parse(request.url, true).pathname && request.method === "GET") {
      callback(request, response);
    } 
  },
  post: function (request, response, path, callback) {
    if (path === request.url && request.method === "POST") {
      callback(request, response);
    } 
  },
  delete: function (request, response, path, callback) {
    if (path === url.parse(request.url, true).pathname && request.method === "DELETE") {
      callback(request, response);
    } 
  },
  patch: function (request, response, path, callback) {
    if (path === url.parse(request.url, true).pathname && request.method === "PATCH") {
      callback(request, response);
    } 
  },

};

module.exports = routerMethods;
