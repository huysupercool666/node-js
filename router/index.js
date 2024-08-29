const taskRouter = require("./tasksRouter");

const router = {
  run: function (request, response) {
    taskRouter.run(request, response);
  },
};

module.exports = router;