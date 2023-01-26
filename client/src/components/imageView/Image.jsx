import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';

import ax from '../../util/ax.js';
import '../../styles/image.css';

import st from '../state.js';
import PreLoad      from './PreLoad.jsx';
import ImageButtons from './ImageButtons.jsx';

const Image = ({image, index}) => {
  const ratio = {aspectRatio: image.width/image.height};
  const style = {
    ...ratio,
    backgroundColor: image.avg_color
  };

  return (
    <div className='imageContainer v' style={ratio}>
      <img
        src={image.src.medium}
        className='medImage'
        style={style}
        onClick={()=>{st.setZoom(index)}}
      />
      <ImageButtons image={image}/>
      <PreLoad image={image}/>
    </div>
  );
};

export default Image;