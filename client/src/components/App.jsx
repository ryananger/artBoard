import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st          from 'ryscott-st';
import ax          from '../util/ax.js';
import input       from '../util/input.js';
import helpers     from '../util/helpers.js';
import cookieParse from '../util/cookieParse.js';

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
  const [imageData, setImageData] = st.newState('imageData', useState([]));
  const [search, setSearch]       = st.newState('search', useState(defaultQuery));
  const [view, setView]           = st.newState('view', useState('home'));
  const [user, setUser]           = st.newState('user', useState(null));

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
      <Alert />
      <Header />
      {renderView()}
    </div>
  )
};

export default App;

