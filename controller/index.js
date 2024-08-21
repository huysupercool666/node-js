const { StatusCode } = require("../controller/helper.js");

function getListTask(request, response) {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end("get all list tasks");
}
function createTask(request, response) {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end("Id task created");
}
function updateTask(request, response) {
    response.writeHead(StatusCode.NO_CONTENT, {
      "Content-Type": "application/json",
    });
    response.end();
}
function deleteTask(request, response) {
    response.writeHead(StatusCode.NO_CONTENT, {
      "Content-Type": "application/json",
    });
    response.end();
}

module.exports = {
  getListTask,
  createTask,
  updateTask,
  deleteTask,
};
