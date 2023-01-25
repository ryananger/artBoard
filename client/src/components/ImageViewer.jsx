import React, { useState, useEffect } from 'react';
import ax from '../util/ax.js';

import Image     from './Image.jsx';
import ZoomImage from './ZoomImage.jsx';

const ImageViewer = ({state}) => {
  const [currentPage, setPage]  = useState(1);
  const [fetching, setFetching] = useState(false);
  const [zoom, setZoom] = useState(null);

  const imageData = state.imageData;
  const search    = state.search;

  var handleScroll = function(e) {
    var scroll = e.target.scrollTop + e.target.clientHeight;
    var height = e.target.scrollHeight;

    if (scroll > height * 0.75 && !fetching) {
      var newPageNum = currentPage + 1;

      setPage(newPageNum);
      setFetching(true);

      ax.getPage(search.query, newPageNum, state, setFetching);
    }
  };

  var renderImages = function() {
    var images = [];

    imageData.map(function(image, i) {
      images.push(<Image key={i} image={image} setZoom={setZoom} index={i}/>);
    })

    return images;
  };

  var toggleOverflow = function() {
    return zoom !== null ? {overflow: 'hidden'} : {overflow: 'overlay'};
  };

  return (
    <div id='viewer' className='imageViewer h' onScroll={handleScroll} style={toggleOverflow()}>
      {zoom !== null && <ZoomImage imageData={imageData} setZoom={setZoom} index={zoom}/>}
      {renderImages()}
    </div>
  );
};

export default ImageViewer;