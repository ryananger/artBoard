import React, { useState, useEffect } from 'react';
import ax from '../util/ax.js';

const Image = ({image, setZoom}) => {
  return (
    <div className='imageContainer v' style={{aspectRatio: image.width/image.height}}>
      <img
        src={image.src.medium}
        className='searchImage'
        style={{
          aspectRatio: image.width/image.height,
          backgroundColor: image.avg_color
        }}
        onClick={()=>{setZoom(image)}}
      />
    </div>
  );
};

export default Image;