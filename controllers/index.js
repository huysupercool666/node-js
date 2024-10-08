const { StatusCode } = require("../common/constants/index.js");
const { handleNotFound } = require("../common/helpers/index.js");

function getListTask(request, response) {
  try {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end("get all list tasks");
  } catch (error) {
    handleNotFound(request, response);
  }
}

function createTask(request, response) {
  try {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end(JSON.stringify("Response id task has been created"));
  } catch (error) {
    handleNotFound(request, response);
  }
}

function updateTask(request, response) {
  try {
    response.writeHead(StatusCode.NO_CONTENT, {});
    response.end();
  } catch (error) {
    handleNotFound(request, response);
  }
}

function deleteTask(request, response) {
  try {
    response.writeHead(StatusCode.NO_CONTENT, {});
    response.end();
  } catch (error) {
    handleNotFound(request, response);
  }
}

module.exports = {
  getListTask,
  createTask,
  updateTask,
  deleteTask,
};
