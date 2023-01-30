import React, { useState, useEffect } from 'react';
import { AiFillHeart       as Heart,
         AiFillPlusCircle  as Add,
         AiFillCheckCircle as Check } from 'react-icons/ai';
import { BsFullscreen      as Full} from 'react-icons/bs';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import Alert from '../Alert.jsx';

const ImageButtons = ({image, inZoom}) => {
  const [alerting, setAlerting] = useState(false);
  const [adding,   setAdding]   = useState(false);
  const [textIn,   setTextIn]   = useState(false);

  const boards = st.user ? st.user.boards : [];
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

  var handleAdd = function(type) {
    if (type === 'select') {
      var selected = document.getElementById('select' + image.id).value;

      if (selected === 'new') {
        setTextIn(true);
        return;
      } else {
        var name = boards[selected].boardname;

        ax.addToBoard(name, image);

        st.lastBoard = selected;
        setAdding(false);
      }
    } else {
      var name = document.getElementById('boardForm').boardName.value;

      ax.createBoard(name, image);

      st.lastBoard = name;
      setAdding(false);
      setTextIn(false);
    }
  };

  var renderAdd = function() {
    var textSubmit = function(e) {
      e.preventDefault();

      handleAdd('text');
    };

    if (textIn) {
      return (
        <div className='boardSelect h'>
          <form id='boardForm' className='boardForm v' onSubmit={textSubmit}>
            <input className='boardInput' type='text' name='boardName' placeholder='Board name?'/>
            <input type='submit' hidden/>
          </form>
          <Check className='checkMark' size={32} onClick={textSubmit}/>
        </div>
      )
    } else {
      return (
        <div className='boardSelect h'>
          <select id={'select' + image.id} className='boardInput'>
            {renderOptions()}
            <option value='new'>New board...</option>
          </select>
          <Check className='checkMark' size={32} onClick={()=>{handleAdd('select')}}/>
        </div>
      )
    }
  };

  var renderOptions = function() {
    return boards.map((board, i)=>{
      return <option key={i} value={i}>{board.boardname}</option>
    })
  };

  var loginAlert = function() {
    setAlerting(true);
    setTimeout(()=>{setAlerting(false)}, 2000);
  };

  useEffect(function() {
    if (!boards[0]) {
      setTextIn(true);
    }

    if (adding && st.lastBoard) {
      var select = document.getElementById('select' + image.id);

      select.value = st.lastBoard;
    }
  }, [adding]);

  return (
    <div className='imageButtons v' style={buttonStyle}>
      {alerting && <Alert text={'You have to be logged in to do that!'} type='login' setAlerting={setAlerting}/>}
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32} onClick={toggleAdding}/>
      {adding && renderAdd()}

      {inZoom && <Full className='fullButton' size={24} onClick={toggleFull}/>}
    </div>
  );
};

export default ImageButtons;