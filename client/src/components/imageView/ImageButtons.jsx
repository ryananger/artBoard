import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

const ImageButtons = ({image, isFavorite}) => {
  const buttonStyle = {top: 0};

  var handleFav = function() {
    helpers.handleFav(image, isFavorite);
  };

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32}/>
    </div>
  );
};

export default ImageButtons;