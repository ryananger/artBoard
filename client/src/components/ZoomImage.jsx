import React, { useState, useEffect } from 'react';
import ax from '../util/ax.js';

const ZoomImage = ({image, setZoom}) => {
  if (!image) {return;}

  return (
    <div className='zoomContainer v' onClick={()=>{setZoom(null)}}>
      <img
        src={image.src.large2x}
        className='zoomImage'
        style={{
          aspectRatio: image.width/image.height,
          backgroundColor: image.avg_color
        }}
      />
    </div>
  );
};

export default ZoomImage;