// load express router
const { Router } = require("express");

// load controllers
// const { checkSession } = require("../controllers/session");
const {
  validateNewUser,
  signupNewUser,
  getAllUsers
} = require("../controllers/user");

// load route error catcher
const catchErrors = require("./catchErrors");

// create router instance
router = new Router();

// setup routes
// endpoint: '/api/users'
router.post("/signup", validateNewUser, signupNewUser);
router.get("/", catchErrors(getAllUsers));

// export
module.exports = router;
