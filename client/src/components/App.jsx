import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import cookieHandle from '../util/cookieHandle.js';

import Header from './Header.jsx';
import Featured from './Featured.jsx';
import ImageViewer from './ImageViewer.jsx';

var defaultQuery = {
  title: 'Drawing',
  query: 'pencil pen paper charcoal graphite art drawing sketch'
};

const App = function() {
  const [imageData, setImageData] = useState([]);
  const [search, setSearch] = useState(defaultQuery);

  var getPhotos = function() {
    ax.searchPhotos(search.query, setImageData);
  };

  useEffect(getPhotos, []);

  return (
    <div className='app v'>
      <Header />
      <Featured setImageData={setImageData} setSearch={setSearch}/>
      <ImageViewer imageData={imageData} />
    </div>
  )
}

export default App;

