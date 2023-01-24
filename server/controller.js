const axios = require('axios');

var pexelsBase = 'http://api.pexels.com/v1/';
var pexelsHeader = {headers: {'Authorization': process.env.PEXELS_API}};

var controller = {
  searchPhotos: function(req, res) {
    var search = req.query.search;

    axios.get(`${pexelsBase}search?query=${search}&per_page=50`, pexelsHeader)
      .then(function(response) {
        res.json(response.data.photos);
      })
  },
  getCollection: function(id, res) {
    axios.get(`${pexelsBase}collections/${id}?type=photos&per_page=50`, pexelsHeader)
      .then(function(response) {
        res.json(response.data.media);
      })
  }
};

module.exports = controller;

