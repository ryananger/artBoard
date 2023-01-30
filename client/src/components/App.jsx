import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import ax          from '../util/ax.js';
import input       from '../util/input.js';
import helpers     from '../util/helpers.js';
import cookieParse from '../util/cookieParse.js';

import st          from './state.js';
import Alert       from './Alert.jsx';
import Login       from './Login.jsx';
import Profile     from './Profile.jsx';
import Header      from './header/Header.jsx';
import Featured    from './Featured.jsx';
import ImageViewer from './imageView/ImageViewer.jsx';
import BoardViewer from './boardView/BoardViewer.jsx';

var defaultQuery = {
  title: 'Drawing',
  query: 'pencil pen paper charcoal graphite art drawing sketch'
};

var cookie = cookieParse();

const App = function() {
  const [imageData, setImageData] = useState([]);
  const [search, setSearch]       = useState(defaultQuery);
  const [view, setView]           = useState('home');
  const [user, setUser]           = useState(null);

  st.imageData    = imageData;
  st.setImageData = setImageData;
  st.search       = search;
  st.setSearch    = setSearch;
  st.view         = view;
  st.setView      = setView;
  st.user         = user;
  st.setUser      = setUser;

  var renderView = function() {
    switch (view) {
      case 'auth':
        return <Login />;
      case 'home':
      case 'favorites':
        return (
          <>
          <Featured />
          <ImageViewer />
          </>
        );
      case 'boards':
        return (
          <>
          <Featured />
          <BoardViewer />
          </>
        );
      case 'profile':
        return <Profile />;
    }
  };

  useEffect(function() {
    if (cookie.user) {
      ax.getUser(cookie.user);
    }
  }, []);

  return (
    <div id='app' className='app'>
      <Header />
      {renderView()}
      <Alert />
    </div>
  )
};

export default App;

