import React, { useState, useEffect } from 'react';

import '../../styles/imageViewer.css';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st        from '../state.js';
import Image     from './Image.jsx';
import ZoomImage from './ZoomImage.jsx';

const ImageViewer = () => {
  const [currentPage, setPage]  = useState(1);
  const [fetching, setFetching] = useState(false);
  const [zoom, setZoom]         = useState(null);
  const [fullZoom, setFull]     = useState(false);

  st.zoom     = zoom;
  st.setZoom  = setZoom;
  st.fullZoom = fullZoom;
  st.setFull  = setFull;

  var handleScroll = function(e) {
    if (st.view !== 'home') {return;}

    var scroll = e.target.scrollTop + e.target.clientHeight;
    var height = e.target.scrollHeight;

    if (scroll > height * 0.75 && !fetching) {
      var newPageNum = currentPage + 1;

      setPage(newPageNum);
      setFetching(true);

      ax.getPage(st.search.query, newPageNum, setFetching);
    }
  };

  var renderImages = function() {
    var images = [];

    st.imageData.map(function(image, i) {
      images.push(<Image key={i} image={image} index={i}/>);
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
    if (st.view === 'home') {
      ax.searchPhotos(st.search.query, 1 + helpers.rand(4));
    }
  };

  useEffect(getPhotos, []);

  return (
    <div id='viewer' className='imageViewer h' onScroll={handleScroll} style={modalStyle()}>
      {zoom !== null && <ZoomImage index={zoom}/>}
      {renderImages()}
    </div>
  );
};

export default ImageViewer;