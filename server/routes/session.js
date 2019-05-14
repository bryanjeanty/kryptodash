// load express router
const { Router } = require("express");

// load controllers
const {
  startSession,
  endSession,
  checkSession
} = require("../controllers/session");
const { getUser, updateUser, deleteUser } = require("../controllers/user");

// load route error catcher
const catchErrors = require("./catchErrors");

// express router instance
router = new Router();

// setup routes
// Endpoint: '/api/session'
router.post("/signin", startSession);
router.get("/signout", endSession);

// Endpoint: '/api/session/users'
router
  .route("/:id")
  .get(checkSession, catchErrors(getUser))
  .put(checkSession, catchErrors(updateUser))
  .delete(checkSession, catchErrors(deleteUser));

// export
module.exports = router;
