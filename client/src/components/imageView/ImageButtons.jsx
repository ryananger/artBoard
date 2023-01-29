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

  var handleAdd = function(type) {
    if (type === 'select') {
      var selected = document.getElementById('select').value;

      if (selected === 'new') {
        setTextIn(true);
        return;
      } else {
        ax.addToBoard(selected, image);

        st.lastBoard = selected;
        setAdding(false);
      }
    } else {
      var name = document.getElementById('boardForm').boardName.value;

      ax.createBoard(name, image);

      st.lastBoard = selected;
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
          <select id='select' className='boardInput'>
            {renderOptions()}
            <option value='new'>New board...</option>
          </select>
          <Check className='checkMark' size={32} onClick={()=>{handleAdd('select')}}/>
        </div>
      )
    }
  };

  var renderOptions = function() {
    return st.user.boards.map((board)=>{
      return <option value={board.boardname}>{board.boardname}</option>
    })
  };

  useEffect(function() {
    if (!st.user || !st.user.boards[0]) {
      setTextIn(true);
    }
  }, [adding]);

  return (
    <div className='imageButtons v' style={buttonStyle}>
      <Heart className={`imageButton ${isFavorite ? 'fav': ''}`} size={32} onClick={handleFav}/>
      <Add   className='imageButton add' size={32} onClick={toggleAdding}/>
      {adding && renderAdd()}
    </div>
  );
};

export default ImageButtons;