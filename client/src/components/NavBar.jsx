import React, { useState, useEffect } from 'react';
import {AiFillHeart as Heart} from 'react-icons/ai';
import {IoMdList as List} from 'react-icons/io';
import {HiPencil as Draw} from 'react-icons/hi';
import {RiLogoutBoxRFill as LogOut}   from 'react-icons/ri';

import ax from '../util/ax.js';
import auth from '../util/auth.js';

const NavBar = ({state}) => {
  var handleLogout = function() {
    document.cookie = 'user=;';
    auth.logOut();
    state.setView('home');
    state.setUser(null);
  };

  return (
    <div className='navButtons v'>
      <Heart  className='navButton' size={32}/>
      <List   className='navButton' size={32}/>
      <Draw   className='navButton' size={32}/>
      <div    className='navSpacer'><hr/><hr/></div>
      <LogOut className='navButton' size={28} onClick={handleLogout}/>
    </div>
  );
};

export default NavBar;