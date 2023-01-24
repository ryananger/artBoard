import axios from 'axios';

var urlBase = process.env.URL;

var ax = {
  searchPhotos: function(query, setImageData) {
    axios.get(urlBase + 'search', {params: {search: query}})
      .then(function(response) {
        console.log(response.data);

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

        console.log(newData);
      })
  },
  getCollection: function(id, setImageData) {
    axios.get(urlBase + 'collection/' + id)
      .then(function(response) {
        console.log(response.data);

        setImageData(response.data);
      })
  }
};

window.ax = ax;

export default ax;
