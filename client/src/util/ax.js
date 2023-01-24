import axios from 'axios';

var urlBase = process.env.URL;

var ax = {
  getFeatured: function(setFeatured) {
    axios.get(urlBase + 'featured')
      .then(function(response) {

        console.log(response.data)
        setFeatured(response.data.collections);
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
