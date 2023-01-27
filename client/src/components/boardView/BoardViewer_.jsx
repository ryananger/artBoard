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

  useEffect(function() {
    if (boards[0]) {
      setBoard(boards[0]);

      console.log(boards);
    } else {
      setBoard({images: st.user.favorites});
    }
  }, []);

  return (
    <div className='boardViewer h'>
      {/* <div className='boardConfig h'>

      </div> */}
      {board && renderImages()}
    </div>
  );
};

export default boardViewer;