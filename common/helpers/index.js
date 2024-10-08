const { StatusCode } = require("../constants");

function handleNotFound(request, response) {
  response.writeHead(StatusCode.NOT_FOUND, {
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify({ error: "Not Found" }));
}

module.exports = {
  handleNotFound,
};
