// load npm package
const passport = require('passport');

// load files
const User = require('../models/user.js');

// configuration
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// export
module.exports = { passport };
