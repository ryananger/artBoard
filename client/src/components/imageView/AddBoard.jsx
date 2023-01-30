import React, { useState, useEffect } from 'react';
import { AiFillHeart       as Heart,
         AiFillPlusCircle  as Add,
         AiFillCheckCircle as Check } from 'react-icons/ai';
import { BsFullscreen      as Full} from 'react-icons/bs';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import Alert from '../Alert.jsx';

const AddBoard = ({image, setAdding}) => {
  const boards = st.user ? st.user.boards : [];
  const [textIn, setTextIn] = useState(boards[0] ? false : true);

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

      st.lastBoard = boards.length;
      ax.createBoard(name, image);

      setAdding(false);
      setTextIn(false);
    }
  };

  var renderAdd = function() {
    var textSubmit = function(e) {
      e.preventDefault();

      handleAdd('text');
    };

    var select = (
      <>
        <select id={'select' + image.id} className='boardInput'>
          {renderOptions()}
          <option value='new'>New board...</option>
        </select>
        <Check className='checkMark' size={32} onClick={()=>{handleAdd('select')}}/>
      </>
    );

    var input = (
      <>
        <form id='boardForm' className='boardForm v' onSubmit={textSubmit}>
          <input className='boardInput' type='text' name='boardName' placeholder='Board name?'/>
          <input type='submit' hidden/>
        </form>
        <Check className='checkMark' size={32} onClick={textSubmit}/>
      </>
    );

    return textIn ? input : select;
  };

  var renderOptions = function() {
    return boards.map((board, i)=>{
      return <option key={i} value={i}>{board.boardname}</option>
    })
  };

  useEffect(function() {
    if (boards[st.lastBoard]) {
      var select = document.getElementById('select' + image.id);

      select.value = st.lastBoard;
    }
  }, [boards]);

  return (
    <div className='boardSelect h'>
      {renderAdd()}
    </div>
  );
};

export default AddBoard;