const routerMethods = require("../routerMethod.js");

const routes = require("../routes.js");
const taskController = require("../../controller/index.js");
const userRouter = {
  run(request, response) {
    routerMethods.get(
      request,
      response,
      routes.tasks.getTasks,
      taskController.getListTask
    );
    routerMethods.post(
      request,
      response,
      routes.tasks.createTask,
      taskController.createTask
    );
    routerMethods.delete(
      request,
      response,
      routes.tasks.deleteTask,
      taskController.deleteTask
    );
    routerMethods.patch(
      request,
      response,
      routes.tasks.updateTask,
      taskController.updateTask
    );
  },
};
module.exports = userRouter;
