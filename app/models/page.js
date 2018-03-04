// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title: String,
  question: String,
  options: Array
});

PageSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Page', PageSchema);

