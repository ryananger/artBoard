import React, { useState, useEffect } from 'react';

const ImageViewer = ({imageData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  var handleScroll = function(e) {
    var top = e.target.scrollTop;
    var height = e.target.offsetHeight;

    var currentPage = Math.round(top/height);

    //console.log(top, height);

    if (currentPage !== currentIndex) {
      setCurrentIndex(currentPage);
    }
  };

  var renderImages = function() {
    var images = [];

    imageData.map(function(image, i) {
      var img = (
        <div key={i} className='imageContainer v'>
          <img key={i + '_' + image.id} src={image.src.medium} className='searchImage'/>
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