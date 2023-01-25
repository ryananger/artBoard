import axios from 'axios';

var urlBase = process.env.URL;

var ax = {
  searchPhotos: function(query, num, setImageData) {
    axios.get(urlBase + 'search/' + num, {params: {search: query}})
      .then(function(response) {
        var viewer = document.getElementById('viewer');

        viewer.scrollTop = 0;

        setImageData(response.data);
      })
  },
  getPage: function(query, num, state, setFetching) {
    var imageData = state.imageData;
    var setImageData = state.setImageData;

    axios.get(urlBase + 'search/' + num, {params: {search: query}})
      .then(function(response) {
        var newData = imageData.concat(response.data);

        setFetching(false);
        setImageData(newData);
      })
  },
  getCollection: function(id, setImageData) {
    axios.get(urlBase + 'collection/' + id)
      .then(function(response) {
        setImageData(response.data);
      })
  }
};

window.ax = ax;

export default ax;
