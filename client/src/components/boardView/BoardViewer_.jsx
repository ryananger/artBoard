import React, { useState, useEffect } from 'react';

import '../../styles/boardViewer.css';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st        from '../state.js';
import Image     from './BoardImage.jsx';

const boardViewer = function() {
  const boards = st.user.boards;
  const [board, setBoard] = useState(null);

  var renderImages = function() {
    var images = [];

    board.images.map(function(image, i) {
      images.push(<Image key={i} image={image} index={i}/>);
    });

    return images;
  };

  var renderOptions = function() {
    return boards.map((board, i)=>{
      return <option value={i}>{board.boardname}</option>
    })
  };

  useEffect(function() {
    if (boards[0]) {
      setBoard(boards[0]);

      console.log(boards);
    } else {
      setBoard({images: st.user.favorites});
    }
  }, []);

  return (
    <div className='boardContainer v' >
      <div className='boardConfig h'>
        <select id='select' className='boardInput' onChange={(e)=>{setBoard(boards[e.target.value])}}>
          {renderOptions()}
        </select>
      </div>
      <div className='boardViewer h'>
        {board && renderImages()}
      </div>
    </div>
  );
};

export default boardViewer;