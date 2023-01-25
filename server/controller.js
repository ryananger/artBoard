const axios = require('axios');

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
  }
};

module.exports = controller;

