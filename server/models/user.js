// load npm packages
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

// create user schema
const userSchema = new mongoose.Schema({
first_name: { type: String, trim: true, unique: true, minlength: 5, maxlength: 10, required: "First name is required" },
last_name: { type: String, trim: true, unique: true, minlength: 5, maxlength: 10, required: "Last name is required" },
email: { type: String, trim: true, unique: true, lowercase: true, unique: true, required: "Email is required" },
avatar: { type: String, default: "/static/images/pro-pic.jpg", required: "Avatar is required" },
bio: { type: String, trim: true },
coins: [{ type: ObjectId }]
}, { timestamps: true });

// add plugins
userSchema.plugin(passportLocalMongoose, { usernameField: "email"  });
userSchema.plugin(mongodbErrorHandler);

// export
module.exports = mongoose.model("User", userSchema);
