const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
}

const newSchema = new Schema({
  'email': {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please enter a valid email address",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  'password': {
    type: String,
    required: "Please enter your password"
  },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

newSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function () {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function () {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('User', newSchema);