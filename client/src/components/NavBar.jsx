import React, { useState, useEffect } from 'react';
import {AiFillHeart as Heart} from 'react-icons/ai';
import {IoMdList as List} from 'react-icons/io';
import {HiPencil as Draw} from 'react-icons/hi';

import ax from '../util/ax.js';

const NavBar = ({image, setZoom, index}) => {
  return (
    <div className='navButtons v'>
      <Heart className='navButton'      size={32}/>
      <List  className='navButton list' size={32}/>
      <Draw  className='navButton draw' size={32}/>
    </div>
  );
};

export default NavBar;