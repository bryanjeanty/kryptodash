// load npm packages
const mongoose = require('mongoose');

// configuration
const mongooseConfig = ({ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

// export
module.exports = { mongooseConfig };
