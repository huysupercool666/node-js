const { taskUrl } = require("../common/constants/index.js");
module.exports = {
  tasks: {
    get: taskUrl.getTasks,
    edit: taskUrl.updateTask,
    delete: taskUrl.deleteTask,
    create: taskUrl.createTask,
  },
};
