const routerMethods = require("../routerMethod.js");

const routes = require("../routes.js");
const taskController = require("../../controller/index.js");
const userRouter = {
  run(request, response) {
    routerMethods.get(
      request,
      response,
      routes.tasks.get,
      taskController.getListTask
    );

    routerMethods.post(
      request,
      response,
      routes.tasks.create,
      taskController.createTask
    );

    routerMethods.delete(
      request,
      response,
      routes.tasks.delete,
      taskController.deleteTask
    );
    
    routerMethods.patch(
      request,
      response,
      routes.tasks.edit,
      taskController.updateTask
    );
  },
};
module.exports = userRouter;
