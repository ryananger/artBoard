import React, { useState, useEffect } from 'react';
import { AiFillHeart       as Heart,
         AiFillPlusCircle  as Add,
         AiFillCheckCircle as Check } from 'react-icons/ai';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

const ImageButtons = ({image, isFavorite}) => {
  const [adding, setAdding] = useState(false);
  const [textIn, setTextIn] = useState(false);
  const buttonStyle = {top: 0};

  var handleFav = function() {
    helpers.handleFav(image, isFavorite);
  };

  var toggleAdding = function() {
    setAdding(!adding);
  };

  var renderAdd = function() {
    if (textIn) {
      return (
        <div className='boardSelect h'>
          <form id='boardForm' className='boardForm v'>
            <input className='boardInput' type='text' name='boardName' placeholder='Board name?'/>
            <input type='submit' hidden/>
          </form>
          <Check className='checkMark' size={32}/>
        </div>
      )
    } else {
      return (
        <div className='boardSelect h'>
          <select id='select' className='boardInput'>
            <option value='0'>New board...</option>
          </select>
          <Check className='checkMark' size={32}/>
        </div>
      )
    }

  };

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32} onClick={toggleAdding}/>
      {adding && renderAdd()}
    </div>
  );
};

export default ImageButtons;