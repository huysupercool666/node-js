const router = require("../routers/index.js");
const http = require("http");

function createServer(request, response) {
  router.run(request, response);
}

const server = http.createServer(createServer);

server.listen(3000, "localhost", () => {
  console.log("Listening on localhost:3000");
});
