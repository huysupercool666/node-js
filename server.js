const { createServer } = require("http").createServer;
const routes = require("./router/index.js");

const server = createServer((request, response) => {
  router.run(request, response);
});

server.listen(3000, "localhost", () => {
  console.log("Listening on localhost:3000");
});