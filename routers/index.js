const taskRouter = require("./task");

const router = {
  run: function (request, response) {
    taskRouter.run(request, response);
  },
};

module.exports = router;
