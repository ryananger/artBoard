import React, { useState, useEffect } from 'react';
import {
  AiFillHeart as Heart,
  AiFillPlusCircle as Add
} from 'react-icons/ai';
import ax from '../util/ax.js';

const ImageButtons = ({image, setZoom, index}) => {
  return (
    <div className='imageButtons v'>
      <Heart className='imageButton' size={32}/>
      <Add   className='imageButton add' size={32}/>
    </div>
  );
};

export default ImageButtons;