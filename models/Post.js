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
  'postType': {
    type: String,
    required: true
  },
  'user': {
    type: String,
    required: true
  },
  'title': {
    type: String,
    required: true
  },
  'body': {
    type: String,
    required: true
  },
  'responses': {
    type: String,
    emun: true
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



module.exports = mongoose.model('Post', newSchema);