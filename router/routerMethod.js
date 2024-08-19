const controller = require("../controller/index.js");

module.exports = {
  GET: controller.createListTask,
  POST: controller.createListTask,
  PATCH: controller.updateListTask,
  DELETE: controller.deleteListTask,
};

