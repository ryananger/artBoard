import React, { useState, useEffect } from 'react';
import {AiFillHeart as Heart}         from 'react-icons/ai';
import {IoMdList as List}             from 'react-icons/io';
import {HiPencil as Draw}             from 'react-icons/hi';
import {RiLogoutBoxRFill as LogOut}   from 'react-icons/ri';

import '../../styles/navbar.css';
import st      from 'ryscott-st';
import ax      from '../../util/ax.js';
import auth    from '../../util/auth.js';
import helpers from '../../util/helpers.js';

const NavBar = () => {
  var handleLogout = function() {
    helpers.alert('Logout successful.');
    document.cookie = 'user=;';
    auth.logOut();
    st.setView('home');
    st.setUser(null);
  };

  var viewFavorites = function() {
    ax.getUser(st.user.uid, true);
    st.setView('favorites');
    st.setZoom(null);
    st.setImageData(st.user.favorites);
  };

  var viewBoards = function() {
    ax.getUser(st.user.uid, true);
    st.setView('boards');
    st.setZoom(null);
  };

  var viewDraw = function() {
    st.setZoom(null);
  };

  return (
    <div className='navButtons v'>
      <Heart  className='navButton heart' size={32} onClick={viewFavorites}/>
      <List   className='navButton list' size={32} onClick={viewBoards}/>
      {/* <Draw   className='navButton' size={32}/> */}
      <div    className='navSpacer'><hr/><hr/></div>
      <LogOut className='navButton logout' size={28} onClick={handleLogout}/>
    </div>
  );
};

export default NavBar;