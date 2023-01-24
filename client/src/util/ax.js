import axios from 'axios';

var urlBase = process.env.URL;

var ax = {
  getFeatured: function(title, setImageData) {
    axios.get(urlBase + 'search', {params: {search: title}})
      .then(function(response) {
        console.log(response.data);

        setImageData(response.data);
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
