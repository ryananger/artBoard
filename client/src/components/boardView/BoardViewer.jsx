import React, { useState, useEffect } from 'react';

import '../../styles/boardViewer.css';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st        from '../state.js';
import Image     from './BoardImage.jsx';
import Config    from './BoardConfig.jsx';

const boardViewer = function() {
  const [board, setBoard] = useState(null);
  const boards = st.user.boards;

  var renderImages = function() {
    var images = [];

    board.images.map(function(image, i) {
      images.push(<Image key={i} image={image} index={i} board={board}/>);
    });

    return images;
  };

  return (
    <div className='boardContainer v' >
      <Config board={board} setBoard={setBoard}/>
      <div className='boardViewer h'>
        {board && renderImages()}
      </div>
    </div>
  );
};

export default boardViewer;