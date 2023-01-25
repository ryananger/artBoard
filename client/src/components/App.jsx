import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import helpers      from '../util/helpers.js';
import cookieHandle from '../util/cookieHandle.js';

import Auth        from './Auth.jsx';
import Header      from './Header.jsx';
import Featured    from './Featured.jsx';
import ImageViewer from './ImageViewer.jsx';

var defaultQuery = {
  title: 'Drawing',
  query: 'pencil pen paper charcoal graphite art drawing sketch'
};

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

  var getPhotos = function() {
    if (view === 'home') {
      ax.searchPhotos(search.query, 1 + helpers.rand(4), setImageData);
    }
  };

  var renderView = function() {
    switch (view) {
      case 'auth':
        return <Auth state={state}/>;
      case 'home':
        return (
          <>
          <Featured    state={state}/>
          <ImageViewer state={state}/>
          </>
        );
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

