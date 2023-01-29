import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';

import '../../styles/image.css';
import ax from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st           from '../state.js';
import PreLoad      from './PreLoad.jsx';
import ImageButtons from './ImageButtons.jsx';

const Image = ({image, index}) => {
  const ratio = {aspectRatio: image.width/image.height};
  const style = {
    ...ratio,
    backgroundColor: image.avg_color
  };

  const isFavorite = helpers.isFavorite(image);

  var renderHeart = function() {
    if (isFavorite) {
      return (
        <div className='hoverHeart v'>
          <Heart size={32}/>
        </div>
      )
    }
  };

  return (
    <div className='imageContainer v' style={ratio}>
      <img
        id={'image' + index}
        src={image.src.medium}
        className='medImage'
        style={style}
        onClick={()=>{st.setZoom(index)}}
      />
      {renderHeart()}
      {st.user && <ImageButtons image={image} isFavorite={isFavorite}/>}
      <PreLoad image={image}/>
    </div>
  );
};

export default Image;