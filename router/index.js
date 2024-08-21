var taskRouter = require("./tasksRouter");

var router = {
  run: function (request, response) {
    taskRouter.run(request, response);
  },
};

module.exports = router;