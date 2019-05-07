// load express router
const { Router } = require("express");

// load controllers
const { checkSession } = require("../controllers/session");
const {
  validateNewUser,
  signupNewUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/user");

// load route error catcher
const catchErrors = require("./catchErrors");

// create router instance
router = new Router();

// setup routes
// endpoint: '/api/users'
router.post("/signup", validateNewUser, signupNewUser);
router.get("/", catchErrors(getAllUsers));

// endpoint: '/api/users/:id'
router
  .route("/:id")
  .get(catchErrors(getUser))
  .put(catchErrors(updateUser))
  .delete(catchErrors(deleteUser));

// export
module.exports = router;
