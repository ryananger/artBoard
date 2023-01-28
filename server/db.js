const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  uid:          String,
  username:     String,
  firstName:    String,
  lastName:     String,
  pic:          String,
  favorites:   [Object],
  uploads:     [String],

  bio:         {type: String, maxLength: 140}
});

const boardSchema = new mongoose.Schema({
  ownerId:      String,
  boardname:    String,
  images:      [Object],
  config:       Object
});

const User  = new mongoose.model('User', userSchema);
const Board = new mongoose.model('Board', boardSchema);

var schemas = {
  User:  User,
  Board: Board
};

module.exports = schemas;