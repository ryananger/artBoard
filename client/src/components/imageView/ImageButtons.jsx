import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';
import { BsFullscreen     as Full} from 'react-icons/bs';

import ax from '../../util/ax.js';

const ImageButtons = ({inZoom, full, setFull}) => {
  const buttonStyle = full ? {top: '48px', right: '1.5vh'} : {top: 0};

  var toggleFull  = ()=>{setFull(!full)};

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className='imageButton'     size={32}/>
      <Add   className='imageButton add' size={32}/>

      {inZoom && <Full className='fullButton' size={24} onClick={toggleFull}/>}
    </div>
  );
};

export default ImageButtons;