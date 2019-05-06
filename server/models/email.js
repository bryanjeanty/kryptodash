// load npm packages
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

// create email schema
const emailSchema = new mongoose.Schema({
sent_by: { type: ObjectId, ref: "User" },
sent_to: { type: String, trim: true, lowercase: true, required: "Sent to field is required" }
subject: { type: String, trim: true },
body: { type: String, trim: true, required: "Email body is required" },
replies: [{ type: String, created_at: { type: Date, default: Date.now }, sent_by: { type: String, trim: true, lowercase: true, required: "Required" } }],
created_at: { type: Data, default: Date.now }
}, { autoIndex: false });

// populate any fields
const populateSentBy = (next) => {
this.populate('sent_by', '_id email avatar');
next();
};

emailSchema.pre('findOne', populateSentBy).pre('find', populateSentBy);

// add plugins
emailSchema.index({ sent_by: 1, created_at: 1  });

// export
module.exports = mongoose.model('Email', emailSchema);
