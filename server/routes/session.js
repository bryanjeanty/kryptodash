// load express router
const { Router } = require("express");

// load controllers
const { startSession, endSession } = require("../controllers/session");

// express router instance
router = new Router();

// setup routes
// Endpoint: '/api/session'
router.post("/signin", startSession);
router.get("/signout", endSession);

// export
module.exports = router;
