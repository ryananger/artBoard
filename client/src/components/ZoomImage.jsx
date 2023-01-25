import React, { useState, useEffect } from 'react';
import {
  BsArrowRightCircleFill as Next,
  BsArrowLeftCircleFill as Prev
} from 'react-icons/bs';

import ax from '../util/ax.js';

const ZoomImage = ({image, setZoom}) => {
  if (!image) {return;}

  return (
    <div className='zoomContainer h' onClick={()=>{setZoom(null)}}>
      <div className='zoomButtonContainer prev h'>
        <Prev className='zoomButton' size={48}/>
      </div>
      <img
        src={image.src.large2x}
        className='zoomImage'
        style={{
          aspectRatio: image.width/image.height,
          backgroundColor: image.avg_color
        }}
      />
      <div className='zoomButtonContainer next h'>
        <Next className='zoomButton' size={48}/>
      </div>
    </div>
  );
};

export default ZoomImage;