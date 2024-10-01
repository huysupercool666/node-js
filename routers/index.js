const taskRouter = require("./Router-Tasks/index");

const router = {
  run: function (request, response) {
    taskRouter.run(request, response);
  },
};

module.exports = router;
