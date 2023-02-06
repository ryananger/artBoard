import React, { useState, useEffect } from 'react';
import { IoMdRemoveCircle as Remove } from 'react-icons/io';
import { BiGridSmall as Small } from 'react-icons/bi';
import { BsFillSquareFill as Large} from 'react-icons/bs';

import '../../styles/boardViewer.css';
import st      from 'ryscott-st';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';


const sizes = ['small', 'medium', 'large2x'];

const BoardConfig = function({setBoard}) {
  const [selectedBoard, setSelected] = useState(st.lastBoard || 0);
  const boards  = st.user.boards;
  const size    = st.boardSize;

  var handleSize = function(dir) {
    if (sizes[sizes.indexOf(size) + dir]) {
      st.setBoardSize(sizes[sizes.indexOf(size) + dir]);
    }
  };

  var removeBoard = function() {
    helpers.alert(`Removed ${boards[selectedBoard].boardname}.`)
    ax.removeBoard(boards[selectedBoard]);

    if (st.lastBoard === selectedBoard) {
      st.lastBoard = null;
    }

    setSelected(boards[selectedBoard - 1] ? selectedBoard - 1 : 0);
  };

  var renderOptions = function() {
    if (boards.length === 0) {
      return <option value={0}>Favorites</option>;
    }

    return boards.map((board, i)=>{
      return <option key={i} value={i}>{board.boardname}</option>
    });
  };

  useEffect(function() {
    var select = document.getElementById('boardSelect');
    select.value = selectedBoard;

    if (boards[selectedBoard]) {
      setBoard(boards[selectedBoard]);
      return;
    } else {
      select.value = 0;
    }

    if (!board && boards[selectedBoard]) {
      setBoard(boards[selectedBoard]);
    } else if (boards.length === 0) {
      setBoard({images: st.user.favorites});
    }
  }, [st.user]);

  return (
    <div className='boardConfig h'>
      <select
        id='boardSelect'
        className='boardInput'
        onChange={(e)=>{
          setBoard(boards[e.target.value])
          setSelected(e.target.value);
      }}>
        {renderOptions()}
      </select>
      <div className='boardConfigButtons h'>
        <div className='h'>
          <Small className='sizeButton' size={32} onClick={()=>{handleSize(-1)}}/>
          <Large className='sizeButton' size={24} onClick={()=>{handleSize(1)}}/>
        </div>
        {st.user.boards[0] && <Remove className='boardImageButton remove' size={32} onClick={removeBoard}/>}
      </div>
    </div>
  );
};

export default BoardConfig;