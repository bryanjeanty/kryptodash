// load passport for user authentication
const passport = require("passport");

// start user session
module.exports = startSession = (request, response) => {
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
        firstName: user.firstName,
        email: user.email,
        message: "Session started"
      };
      response.json(userData);
    });
  })(request, response);
};

// end user session
module.exports = endSession = (request, response) => {
  response.clearCookie("krypto-connect.sid");
  response.json({ message: "You are now signed out!" });
  request.logout();
};

// check if user has a session (is authenticated)
module.exports = checkSession = (request, response, next) => {
  if (request.isAuthenticated()) {
    next();
  }
  response.redirect("/");
};
