const User = require("../models/user");

// validate signup form
module.exports = validateNewUser = (request, response, next) => {
  // sanitize signup fields (first name, last name, email, password)
  request.sanitizeBody("firstName");
  request.sanitizeBody("lastName");
  request.sanitizeBody("email");
  request.sanitizeBody("password");

  // check & validate fields (first name, last name, email, password)
  // first name field
  request.checkBody("firstName", "Enter your first name").notEmpty();

  request
    .checkBody("firstName", "First name must be atleast 3 characters long")
    .isLength({ min: 3 });

  // last name field
  request.checkBody("lastName", "Enter your first name").notEmpty();

  request
    .checkBody("lastName", "Last name must be atleast one character long")
    .isLength({ min: 1 });

  // email field
  request
    .checkBody("email", "Enter a valid email")
    .isEmail()
    .normalizeEmail();

  // password field
  request.checkBody("password", "Enter a password").notEmpty();

  request
    .checkBody("password", "Password must be atleast 4 characters long")
    .isLength({ min: 4 });

  // catch and send first error
  const errors = request.validationErrors();
  if (errors) {
    const firstError = errors[0];
    return response.status(400).send(firstError);
  }

  // move to next function
  next();
};

// create user
module.exports = signupNewUser = async (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  const user = await new User({ firstName, lastName, email, password });
  await User.register(user, password, (error, user) => {
    if (error) {
      return response.status(500).send(error.message);
    }

    const userData = {
      firstName: user.firstName,
      email: user.email,
      message: "Successfully registered new user!"
    };

    response.json(userData);
  });
};

// get all users in database
module.exports = getAllUsers = async (request, response) => {
  const users = await User.find().select(
    "_id firstName email createdAt updatedAt"
  );

  response.json(users);
};
