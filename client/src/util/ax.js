import axios from 'axios';

import st from '../components/state.js';

var urlBase = process.env.URL;

var ax = {
  searchPhotos: function(query, num) {
    axios.get(urlBase + 'search/' + num, {params: {search: query}})
      .then(function(response) {
        var viewer = document.getElementById('viewer');

        if (viewer) {
          viewer.scrollTop = 0;
        }

        st.setZoom(null);
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
        document.cookie = `user=${user.uid}`;

        st.setUser(response.data);
        st.setView('home');
      })
  },
  getUser: function(uid, alt) {
    axios.get(urlBase + 'users/' + uid)
      .then(function(response) {
        document.cookie = `user=${uid}`;

        st.setUser(response.data);

        if (!alt) {
          st.setView('home');
        }
      })
  },

  addFavorite: function(image) {
    axios.post(urlBase + 'favorite', {uid: st.user.uid, image: image})
      .then(function(response) {
        st.setUser(response.data);
      })
  },
  removeFavorite: function(image) {
    axios.put(urlBase + 'favorite', {uid: st.user.uid, image: image})
      .then(function(response) {
        st.setUser(response.data);

        if (st.view === 'favorites') {
          st.setImageData(response.data.favorites);
        }
      })
  },
  createBoard: function(name, image) {
    var newBoard = {
      ownerId: st.user.uid,
      boardname: name,
      images: [image],
      config: {}
    };

    axios.post(urlBase + 'boards', newBoard)
      .then(function(response) {
        ax.getBoards(st.user);
      })
  },
  getBoards: function(user) {
    axios.get(urlBase + 'boards/' + user.uid)
      .then(function(response) {
        var updatedUser = {
          ...user,
          boards: response.data
        };

        console.log(updatedUser);

        st.setUser(updatedUser);
      })
  },
  addToBoard: function(name, image) {
    var update = {
      ownerId: st.user.uid,
      boardname: name,
      image: image
    };

    axios.put(urlBase + 'boards/add', update)
      .then(function(response) {
        console.log(response);

        ax.getBoards(st.user);
      })
  },

  updateProfile: function() {

  }
};

window.ax = ax;

export default ax;
