import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';

import '../../styles/boardImage.css';
import ax from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st           from '../state.js';
import PreLoad      from './PreLoad.jsx';
import ImageButtons from './BoardImageButtons.jsx';

const Image = ({image, index}) => {
  const ratio = {aspectRatio: image.width/image.height};
  const style = {
    ...ratio,
    backgroundColor: image.avg_color
  };

  return (
    <div className='boardImageContainer v' style={ratio}>
      <img
        id={'image' + index}
        src={image.src.large2x}
        className='boardImage'
        style={style}
        onClick={()=>{st.setZoom(index)}}
      />
      <ImageButtons image={image}/>
      <PreLoad image={image}/>
    </div>
  );
};

export default Image;