import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import cookieHandle from '../util/cookieHandle.js';

import Header from './Header.jsx';
import Featured from './Featured.jsx';
import ImageViewer from './ImageViewer.jsx';

const App = function() {
  const [imageData, setImageData] = useState([]);

  var getCollection = function() {
    ax.getCollection('k4hjhsd', setImageData);
  };

  useEffect(getCollection, []);

  return (
    <div className='app v'>
      <Header />
      <Featured />
      <ImageViewer imageData={imageData} />
    </div>
  )
}

export default App;

