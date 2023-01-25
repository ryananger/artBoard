import React, { useState, useEffect } from 'react';
import {
  AiFillHeart as Heart,
  AiFillPlusCircle as Add
} from 'react-icons/ai';
import ax from '../util/ax.js';

import PreLoad from './PreLoad.jsx';

const Image = ({image, setZoom}) => {
  return (
    <div className='imageContainer v' style={{aspectRatio: image.width/image.height}}>
      <img
        src={image.src.medium}
        className='medImage'
        style={{
          aspectRatio: image.width/image.height,
          backgroundColor: image.avg_color
        }}
        onClick={()=>{setZoom(image)}}
      />
      <div className='imageButtons v'>
        <Heart className='imageButton' size={32}/>
        <Add   className='imageButton' size={32}/>
      </div>
      <PreLoad image={image}/>
    </div>
  );
};

export default Image;