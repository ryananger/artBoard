import React, { useState, useEffect } from 'react';
import ax from '../util/ax.js';

const ImageViewer = ({state}) => {
  const [currentPage, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const imageData = state.imageData;
  const search = state.search;

  var handleScroll = function(e) {
    var scroll = e.target.scrollTop + e.target.clientHeight;
    var height = e.target.scrollHeight;

    if (scroll > height * 0.6 && !fetching) {
      var newPageNum = currentPage + 1;

      setPage(newPageNum);
      setFetching(true);

      ax.getPage(search.query, newPageNum, state, setFetching);
    }

    // if (currentPage !== currentIndex) {
    //   setCurrentIndex(currentPage);
    // }
  };

  var renderImages = function() {
    var images = [];

    imageData.map(function(image, i) {
      var img = (
        <div
          key={i}
          className='imageContainer v'
          style={{aspectRatio: image.width/image.height}}
        >
          <img
            key={image.id}
            src={image.src.medium}
            className='searchImage'
            style={{
              aspectRatio: image.width/image.height,
              backgroundColor: image.avg_color
            }}
          />
        </div>
      );

      images.push(img);
    })

    return images;
  };

  return (
    <div className='imageViewer h' onScroll={handleScroll}>
      {renderImages()}
    </div>
  );
};

export default ImageViewer;