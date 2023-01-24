const axios = require('axios');

var pexelsBase = 'http://api.pexels.com/v1/';
var pexelsHeader = {headers: {'Authorization': process.env.PEXELS_API}};

var controller = {
  getFeatured: function(res) {
    axios.get(pexelsBase + 'collections/featured?per_page=80&page=2', pexelsHeader)
      .then(function(response) {
        var id = response.data.collections[0].id;

        controller.getPhotosFromFeatured(id, response.data.collections, res);
      })
  },
  getPhotosFromFeatured: function(id, collections, res) {
    axios.get(`${pexelsBase}collections/${id}?type=photos&per_page=50`, pexelsHeader)
      .then(function(response) {
        var sendBody = {
          collections: collections,
          photos: response.data.media
        };

        res.json(sendBody);
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

