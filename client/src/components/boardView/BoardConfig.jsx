import React, { useState, useEffect } from 'react';
import { IoMdRemoveCircle as Remove} from 'react-icons/io';

import '../../styles/boardViewer.css';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st        from '../state.js';

const boardConfig = function({board, setBoard}) {
  const [selectedBoard, setSelected] = useState(st.lastBoard || 0);
  const boards = st.user.boards;

  var removeBoard = function() {
    ax.removeBoard(boards[selectedBoard]);

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
      {st.user.boards[0] && <Remove className='boardImageButton remove' size={32} onClick={removeBoard}/>}
    </div>
  );
};

export default boardConfig;