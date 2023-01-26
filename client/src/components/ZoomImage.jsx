import React, { useState, useEffect } from 'react';
import {
  BsArrowRightCircleFill as Next,
  BsArrowLeftCircleFill  as Prev,
  BsFullscreen           as Full
} from 'react-icons/bs';

import ax from '../util/ax.js';
import ImageButtons from './ImageButtons.jsx';

const ZoomImage = ({imageData, setZoom, index, setFull, full}) => {
  var image = imageData[index];
  var viewer = document.getElementById('viewer');
  var ratio = image.width/image.height;

  var modalStyle = function() {
    var style = {};

    style.position = 'absolute';
    style.top = full ? 0 : viewer.scrollTop;

    return style;
  };

  return (
    <div className='zoomModal h' style={modalStyle()}>
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
        <div className='navSpacer' style={{position: 'absolute'}}/>
        <ImageButtons inZoom={true} full={full} setFull={setFull}/>
      </div>
      <div className='zoomButtonContainer next h'>
        {index < imageData.length - 1 && <Next className='zoomButton' size={48} onClick={()=>{setZoom(index + 1)}}/>}
      </div>
    </div>
  );
};

export default ZoomImage;