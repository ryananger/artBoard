import React, { useState, useEffect } from 'react';
import { HiDotsVertical as Dots } from 'react-icons/hi';
import { AiFillPlusCircle  as Add } from 'react-icons/ai';
import { IoMdRemoveCircle as Remove} from 'react-icons/io';

import st      from 'ryscott-st';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

const BoardImageButtons = ({image, board}) => {
  var removeImage = function() {
    helpers.alert(`Removed from ${board.boardname}.`);
    ax.removeFromBoard(board.boardname, image);
  };

  return (
    <div className='boardImageButtons v'>
      {/* <Add className='boardImageButton add' size={32}/> */}
      <Remove className='boardImageButton remove' size={32} onClick={removeImage}/>
    </div>
  );
};

export default BoardImageButtons;