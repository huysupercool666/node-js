var userRouter = require("./userRouter");

var router = {
  run: function (request, response) {
    userRouter.run(request, response);
  },
};

module.exports = router;