import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import ax          from '../util/ax.js';
import helpers     from '../util/helpers.js';
import cookieParse from '../util/cookieHandle.js';

import Login       from './Login.jsx';
import Profile     from './Profile.jsx';
import Header      from './header/Header.jsx';
import Featured    from './Featured.jsx';
import ImageViewer from './imageView/ImageViewer.jsx';

var defaultQuery = {
  title: 'Drawing',
  query: 'pencil pen paper charcoal graphite art drawing sketch'
};

var cookie = cookieParse();

const App = function() {
  const [imageData, setImageData] = useState([]);
  const [search, setSearch] = useState(defaultQuery);
  const [view, setView] = useState('home');
  const [user, setUser] = useState(null);

  const state = {
    imageData:    imageData,
    setImageData: setImageData,
    search:       search,
    setSearch:    setSearch,
    view:         view,
    setView:      setView,
    user:         user,
    setUser:      setUser
  };

  var renderView = function() {
    switch (view) {
      case 'auth':
        return <Login state={state}/>;
      case 'home':
        return (
          <>
          <Featured    state={state}/>
          <ImageViewer state={state}/>
          </>
        );
      case 'profile':
        return <Profile state={state}/>;
    }
  };

  useEffect(function() {
    if (cookie.user) {
      ax.getUser(cookie.user, state);
    }
  }, []);

  return (
    <div id='app' className='app v'>
      <Header state={state}/>
      {renderView()}
    </div>
  )
};

export default App;

