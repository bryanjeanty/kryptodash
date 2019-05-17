const User = require("../models/user");

// validate signup form
const validateNewUser = (request, response, next) => {
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
  request.checkBody("lastName", "Enter your last name").notEmpty();
  request
    .checkBody("lastName", "Last name must be atleast two character long")
    .isLength({ min: 2 });

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
const signupNewUser = async (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  const allUsers = await User.find({});
  const sameEmail = allUsers.filter(user => user.email === email);
  if (sameEmail.length !== 0) {
    response.status(409).json({ message: "User already has an account!" });
  } else {
    const newUser = await new User({ firstName, lastName, email, password });
    await User.register(newUser, password, (error, user) => {
      if (!user) {
        return response.status(400).json({ message: "User is undefined" });
      }
      if (error) {
        return response.status(500).json(error.message);
      }

      // send specific data we want
      const userData = {
        user,
        message: "Successfully registered new user!"
      };

      // respond with user data in json format
      response.json(userData);
    });
  }
};

// get all users in database
const getAllUsers = async (request, response) => {
  const users = await User.find().select(
    "_id firstName email createdAt updatedAt"
  );

  // respond with all users in json format
  response.json(users);
};

// get a single user in database
const getUser = async (request, response) => {
  // get user id from query parameter
  const { id } = request.params;

  // find user by id and perform error handling
  await User.findById(id, (error, user) => {
    if (error) {
      return response.status(500).json(error.message);
    }
    if (!user) {
      return response
        .status(400)
        .json({ message: "This user could not be found!" });
    }

    const userData = {
      user,
      message: "User found!"
    };

    // respond with specific user
    response.json(userData);
  });
};

// update a single user in the database
const updateUser = async (request, response) => {
  // get user id from query parameter
  const { id } = request.params;

  // get fields from request body
  const { firstName, bio, email, password, avatar, coins } = request.body;
  const fields = { firstName, bio, email, password, avatar, coins };

  Object.keys(fields).forEach(key => {
    if (typeof fields[key] === "undefined") {
      delete fields[key];
    }
  });

  // set update options
  const options = { new: true };

  // find user and update fields
  const user = await User.findByIdAndUpdate(
    id,
    fields,
    options,
    (error, user) => {
      if (error) {
        response.status(500).json(error.message);
      }
      if (!user) {
        response.status(400).json({ message: "This user could not be found" });
      }
    }
  );

  const userData = { user, message: "User successfully updated!" };

  // respond with the updated user
  response.json(userData);
};

// delete a single user in the database
const deleteUser = async (request, response) => {
  // get user id from query parameter
  const { id } = request.params;

  //find and delete user
  await User.findByIdAndDelete(id, (error, user) => {
    if (error) {
      response.status(500).json(error.message);
    }
    if (!user) {
      response.status(400).json({ message: "This user could not be found" });
    }
  });
  response
    .clearCookie("krypto-connect.sid")
    .json({ message: "User successfully deleted" });
};

module.exports = {
  validateNewUser,
  signupNewUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
};
