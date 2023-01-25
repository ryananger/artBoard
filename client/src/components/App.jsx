import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import helpers      from '../util/helpers.js';
import cookieParse  from '../util/cookieHandle.js';

import Login       from './Login.jsx';
import Profile     from './Profile.jsx';
import Header      from './Header.jsx';
import Featured    from './Featured.jsx';
import ImageViewer from './ImageViewer.jsx';

var defaultQuery = {
  title: 'Drawing',
  query: 'pencil pen paper charcoal graphite art drawing sketch'
};

var cookie = cookieParse();

const App = function() {
  const [imageData, setImageData] = useState([]);
  const [search, setSearch] = useState(defaultQuery);
  const [view, setView] = useState('home');
  const [user, setUser] = useState(cookie.user || null);

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

  var getPhotos = function() {
    if (view === 'home') {
      ax.searchPhotos(search.query, 1 + helpers.rand(4), setImageData);
    }
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
  }

  useEffect(getPhotos, []);

  return (
    <div id='app' className='app v'>
      <Header state={state}/>
      {renderView()}
    </div>
  )
};

export default App;

