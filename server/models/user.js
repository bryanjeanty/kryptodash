// load npm packages
const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

// create user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minlength: 3,
      required: "First name is required"
    },
    lastName: {
      type: String,
      trim: true,
      minlength: 2,
      required: "Last name is required"
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: "Email is required"
    },
    avatar: {
      type: String,
      default: "/static/images/pro-pic.png",
      required: "Avatar is required"
    },
    bio: {
      type: String,
      default: "Happy new user and cryptocurrency enthusiast!",
      required: true
    },
    coins: [{ type: String }]
  },
  { timestamps: true }
);

// add plugins
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
userSchema.plugin(mongodbErrorHandler);

// export
module.exports = mongoose.model("User", userSchema);
