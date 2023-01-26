import React, { useState, useEffect } from 'react';
import {
  AiFillHeart as Heart,
  AiFillPlusCircle as Add
} from 'react-icons/ai';
import {BsFullscreen as Full} from 'react-icons/bs';

import ax from '../util/ax.js';

const ImageButtons = ({inZoom, full, setFull}) => {
  return (
    <div className='imageButtons v' style={full ? {top: '48px'} : {top: 0}}>
      <Heart className='imageButton' size={32}/>
      <Add   className='imageButton add' size={32}/>

      {inZoom && <Full className='fullButton' size={24} onClick={()=>{setFull(!full)}}/>}
    </div>
  );
};

export default ImageButtons;