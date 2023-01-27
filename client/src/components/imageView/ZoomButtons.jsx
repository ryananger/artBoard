import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';
import { BsFullscreen     as Full} from 'react-icons/bs';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

const ZoomButtons = ({image}) => {
  const buttonStyle = {top: '48px', right: '1.5vh'};
  const isFavorite  = helpers.isFavorite(image);

  var toggleFull = function() {
    st.setFull(!st.fullZoom);
  };

  var handleFav = function() {
    helpers.handleFav(image, isFavorite);
  };

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32}/>

      <Full  className='fullButton'      size={24} onClick={toggleFull}/>
    </div>
  );
};

export default ZoomButtons;