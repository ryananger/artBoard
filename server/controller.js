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

        res.status(201);
        res.json(user);
      })
  },
  getUser: function(uid, res) {
    User.findOne({uid: uid})
      .then(function(response) {
        var user = parseUser(response);

        Board.find({ownerId: uid})
          .then(function(boards) {
            user.boards = boards;

            res.status(200);
            res.json(user);
          })
      })
  },
  addFavorite: function(req, res) {
    var uid   = req.body.uid;
    var image = req.body.image;

    var filter = {uid: uid};
    var update = {'$push': {favorites: image}};
    var option = {new: true};

    User.findOneAndUpdate(filter, update, option)
      .then(function(user) {
        res.json(user);
      })
  },
  removeFavorite: function(req, res) {
    var uid   = req.body.uid;
    var image = req.body.image;

    var filter = {uid: uid};

    User.findOne(filter)
      .then(function(user) {
        var newFav = [];

        user.favorites.map((fav)=>{
          if (fav.id !== image.id) {
            newFav.push(fav);
          }
        })

        User.findOneAndUpdate(filter, {favorites: newFav}, {new: true})
          .then(function(user) {
            res.json(user);
          })
      })
  },
  createBoard: function(req, res) {
    var uid   = req.body.ownerId;

    Board.create(req.body)
      .then(function(board) {
        controller.getBoards(uid, res);
      })
  },
  getBoards: function(uid, res) {
    Board.find({ownerId: uid})
      .then(function(boards) {
        res.json(boards);
      });
  },
  addToBoard: function(req, res) {
    var filter = {
      ownerId: req.body.ownerId,
      boardname: req.body.boardname
    };

    console.log(req.body);

    var update = {'$push': {images: req.body.image}};

    Board.findOneAndUpdate(filter, update)
      .then(function(response) {
        console.log(response)

        res.send(`Added to ${filter.boardname}.`);
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
    uploads:   doc.uploads
  };

  return user;
};

module.exports = controller;

