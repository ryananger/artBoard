import React, { useState, useEffect } from 'react';
import {
  BsArrowRightCircleFill as Next,
  BsArrowLeftCircleFill as Prev
} from 'react-icons/bs';

import ax from '../util/ax.js';

import ImageButtons from './ImageButtons.jsx';

const ZoomImage = ({imageData, setZoom, index}) => {
  var image = imageData[index];
  var viewer = document.getElementById('viewer');
  var ratio = image.width/image.height;

  return (
    <div className='zoomModal h' style={{position: 'absolute', top: viewer.scrollTop}}>
      <div className='zoomButtonContainer prev h'>
        {index > 0 && <Prev className='zoomButton' size={48} onClick={()=>{setZoom(index - 1)}}/>}
      </div>
      <div id='zoomContainer' style={{aspectRatio: ratio}}>
        <img
          src={image.src.large2x}
          className='zoomImage'
          style={{
            aspectRatio: ratio,
            backgroundColor: image.avg_color
          }}
          onClick={()=>{setZoom(null)}}
        />
        <ImageButtons />
      </div>
      <div className='zoomButtonContainer next h'>
        {index < imageData.length - 1 && <Next className='zoomButton' size={48} onClick={()=>{setZoom(index + 1)}}/>}
      </div>
    </div>
  );
};

export default ZoomImage;