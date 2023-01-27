import React, { useState, useEffect } from 'react';
import { HiDotsVertical as Dots } from 'react-icons/hi';

import st      from '../state.js';
import ax      from '../../util/ax.js';
import helpers from '../../util/helpers.js';

const BoardImageButtons = ({image, isFavorite}) => {
  return (
    <div className='boardImageButtons v'>
      <Dots className='boardImageButton add' size={32}/>
    </div>
  );
};

export default BoardImageButtons;