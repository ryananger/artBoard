import React, { useState, useEffect } from 'react';
import '../../styles/imageViewer.css';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import Image     from './Image.jsx';
import ZoomImage from './ZoomImage.jsx';

const ImageViewer = ({state}) => {
  const [currentPage, setPage]  = useState(1);
  const [fetching, setFetching] = useState(false);

  const [zoom, setZoom]     = useState(null);
  const [fullZoom, setFull] = useState(false);

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

  var modalStyle = function() {
    var style = {};

    style.overflow = zoom === null ? 'overlay' : 'hidden';
    style.position = fullZoom ? 'unset' : 'relative';

    return style;
  };

  var getPhotos = function() {
    if (state.view === 'home') {
      ax.searchPhotos(search.query, 1 + helpers.rand(4), state.setImageData);
    }
  };

  var zoomState = {
    index: zoom,
    setZoom: setZoom,
    full: fullZoom,
    setFull: setFull
  };

  useEffect(getPhotos, []);

  return (
    <div id='viewer' className='imageViewer h' onScroll={handleScroll} style={modalStyle()}>
      {zoom !== null && <ZoomImage imageData={imageData} zoom={zoomState}/>}
      {renderImages()}
    </div>
  );
};

export default ImageViewer;