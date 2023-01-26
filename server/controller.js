const axios         = require('axios');
const {User, Board} = require('./db.js');

var pexelsBase = 'http://api.pexels.com/v1/';
var pexelsHeader = {headers: {'Authorization': process.env.PEXELS_API}};

var controller = {
  searchPhotos: function(req, res, num) {
    var search = req.query.search;
    var page = '';

    if (num) {
      page = '&page=' + num;
    }

    axios.get(`${pexelsBase}search?query=${search}&per_page=50${page}`, pexelsHeader)
      .then(function(response) {
        res.json(response.data.photos);
      })
  },
  getCollection: function(id, res) {
    axios.get(`${pexelsBase}collections/${id}?type=photos&per_page=50`, pexelsHeader)
      .then(function(response) {

        res.json(response.data.media);
      })
  },

  createUser: function(req, res) {
    User.create(req.body)
      .then(function(response) {
        var user = parseUser(response);

        console.log('Sending user:', user);

        res.status(201);
        res.json(user);
      })
  },
  getUser: function(uid, res) {
    User.findOne({uid: uid})
      .then(function(response) {
        var user = parseUser(response);

        console.log('Sending user:', user);

        res.status(200);
        res.json(user);
      })
  },
  addFavorite: function(req, res) {
    var uid   = req.body.uid;
    var image = req.body.image;

    var filter = {uid: uid};
    var update = {'$push': {favorites: image}};
    var option = {new: true};

    User.findOneAndUpdate(filter, update, option)
      .then(function(response) {
        res.json(response);
      })
  }
};

var parseUser = function(doc) {
  var user = {
    uid:       doc.uid,
    username:  doc.username,

    firstName: doc.firstName || null,
    lastName:  doc.lastName  || null,

    favorites: doc.favorites,
    boards:    doc.boards,
    uploads:   doc.uploads
  };

  return user;
};

module.exports = controller;

