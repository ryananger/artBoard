const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  username:     String,
  firstName:    String,
  lastName:     String,
  bio:          {type: String, maxLength: 140},
  boards:      [String],
  uploads:     [String]
});

const boardSchema = new mongoose.Schema({
  ownerId:      String,
  boardname:    String,
  photos:      [String]
});

const User = new mongoose.model('User', userSchema);
const Board = new mongoose.model('Board', boardSchema);

var schemas = {
  User: User,
  Board: Board
};

module.exports = schemas;