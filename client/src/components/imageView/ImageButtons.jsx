import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';
import { BsFullscreen     as Full} from 'react-icons/bs';

import st from '../state.js';
import ax from '../../util/ax.js';

const ImageButtons = ({image, inZoom}) => {
  const fullZoom = st.fullZoom;
  const setFull  = st.setFull;

  const buttonStyle = fullZoom ? {top: '48px', right: '1.5vh'} : {top: 0};

  var toggleFull = function() {
    setFull(!fullZoom);
  };

  var addFav = function() {
    if (!st.user) {return;}

    ax.addFavorite(image);
  };

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className='imageButton'     size={32} onClick={addFav}/>
      <Add   className='imageButton add' size={32}/>

      {inZoom && <Full className='fullButton' size={24} onClick={toggleFull}/>}
    </div>
  );
};

export default ImageButtons;