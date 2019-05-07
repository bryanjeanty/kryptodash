// load passport for user authentication
const passport = require("passport");

// start user session
const startSession = (request, response) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      return response.status(500).json(error.message);
    }
    if (!user) {
      return response.status(400).json(info.message);
    }
    request.logIn(user, error => {
      if (error) {
        return response.status(500).json(error.message);
      }
      const userData = {
        user,
        message: "Session started"
      };
      response.json(userData);
    });
  })(request, response);
};

// end user session
const endSession = (request, response) => {
  response.clearCookie("krypto-connect.sid");
  response.json({ message: "You are now signed out!" });
  request.logout();
};

// check if user has a session (is authenticated)
const checkSession = (request, response, next) => {
  if (request.isAuthenticated()) {
    next();
  }
  response.redirect("/");
};

module.exports = { startSession, endSession, checkSession };
