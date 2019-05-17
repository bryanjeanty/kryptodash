// load express router
const { Router } = require("express");

// load controllers
const {
  validateNewUser,
  signupNewUser,
  getAllUsers,
  getUser,
  updateUser
} = require("../controllers/user");

// load route error catcher
const catchErrors = require("./catchErrors");

// create router instance
router = new Router();

// setup routes
// endpoint: '/api/users'
router.post("/signup", validateNewUser, signupNewUser);
router.get("/", catchErrors(getAllUsers));

// Endpoint: '/api/users/:id'
router
  .route("/:id")
  .get(catchErrors(getUser))
  .put(catchErrors(updateUser));

// export
module.exports = router;
