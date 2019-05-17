// load express router
const { Router } = require("express");

// load controllers
const { startSession, endSession } = require("../controllers/session");
const { deleteUser } = require("../controllers/user");
const catchErrors = require("./catchErrors");

// express router instance
router = new Router();

// setup routes
// Endpoint: '/api/session'
router.post("/signin", startSession);
router.get("/signout", endSession);
router.delete("/users/:id", catchErrors(deleteUser));

// export
module.exports = router;
