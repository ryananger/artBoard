import React, { useState, useEffect } from 'react';
import { AiFillHeart       as Heart,
         AiFillPlusCircle  as Add,
         AiFillCheckCircle as Check } from 'react-icons/ai';
import { BsFullscreen      as Full } from 'react-icons/bs';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import Alert from '../Alert.jsx';
import AddBoard from './AddBoard.jsx';

const ImageButtons = ({image, inZoom}) => {
  const [adding, setAdding] = useState(false);

  const buttonStyle = inZoom ? {top: '48px', right: '1.5vh'} : {top: 0};
  const isFavorite  = helpers.isFavorite(image);

  var toggleFull = function() {
    st.setFull(!st.fullZoom);
  };

  var toggleAdding = function() {
    if (!st.user) {
      loginAlert();
      return;
    }

    setAdding(!adding);
  };

  var handleFav = function() {
    if (!st.user) {
      loginAlert();
      return;
    }

    helpers.handleFav(image, isFavorite);
  };

  var loginAlert = function() {
    if (st.alerting) {return;}

    st.intAlerts(st.alerts + 1);
    st.setAlert('You have to be logged in to do that!');
  };

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32} onClick={toggleAdding}/>
      {adding && <AddBoard image={image} setAdding={setAdding}/>}

      {inZoom && <Full className='fullButton' size={24} onClick={toggleFull}/>}
    </div>
  );
};

export default ImageButtons;