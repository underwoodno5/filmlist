const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FilmSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  link: {
    type: String,
    require: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Film = mongoose.model('film', FilmSchema);
