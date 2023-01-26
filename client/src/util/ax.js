import axios from 'axios';

import st from '../components/state.js';

var urlBase = process.env.URL;

var ax = {
  searchPhotos: function(query, num) {
    axios.get(urlBase + 'search/' + num, {params: {search: query}})
      .then(function(response) {
        var viewer = document.getElementById('viewer');

        viewer.scrollTop = 0;

        st.setImageData(response.data);
      })
  },
  getPage: function(query, num, setFetching) {
    axios.get(urlBase + 'search/' + num, {params: {search: query}})
      .then(function(response) {
        var newData = st.imageData.concat(response.data);

        setFetching(false);
        st.setImageData(newData);
      })
  },
  getCollection: function(id, setImageData) {
    axios.get(urlBase + 'collection/' + id)
      .then(function(response) {
        st.setImageData(response.data);
      })
  },
  createUser: function(user) {
    axios.post(urlBase + 'users', user)
      .then(function(response) {
        console.log(response);

        document.cookie = `user=${user.uid}`;

        st.setUser(response.data);
        st.setView('home');
      })
  },
  getUser: function(uid) {
    axios.get(urlBase + 'users/' + uid)
      .then(function(response) {
        console.log(response);

        document.cookie = `user=${uid}`;

        st.setUser(response.data);
        st.setView('home');
      })
  },

  addFavorite: function(image) {
    axios.post(urlBase + 'favorite', {uid: st.user.uid, image: image})
      .then(function(response) {
        console.log(response);

        st.setUser(response.data);
      })
  },
  addBoard: function() {

  },

  updateProfile: function() {

  }
};

window.ax = ax;

export default ax;
