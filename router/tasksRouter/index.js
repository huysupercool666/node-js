let routerMethods = require("../routerMethod.js");

let routes = require("../routes.js");
const taskController  = require("../../controller/index.js");
const { handleNotFound } = require("../../controller/helper.js");
let userRouter = {
  run(request, response) {
    routerMethods.get(request, response, routes.tasks.value, taskController.getListTask);
    routerMethods.post(request, response, routes.tasks.value,taskController.createTask);
    routerMethods.delete(request, response, routes.tasks.value, taskController.deleteTask);
    routerMethods.patch(request, response, routes.tasks.value, taskController.updateTask);
    handleNotFound(request, response);
  },
};
module.exports = userRouter;
