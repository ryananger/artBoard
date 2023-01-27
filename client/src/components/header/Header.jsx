import React, {useEffect, useState} from 'react';

import '../../styles/header.css';
import ax from '../../util/ax.js';

import st        from '../state.js';
import SearchBar from './SearchBar.jsx';
import NavBar    from './NavBar.jsx';

const Header = function() {
  var renderButton = function() {
    if (st.user) {
      return (
        <div className='login h' onClick={()=>{st.setView('profile')}}>
          profile
        </div>
      );
    } else {
      return (
        <div className='login h' onClick={()=>{st.setView('auth')}}>
          login
        </div>
      );
    }
  };

  return (
    <div className='header h'>
      {st.user && <NavBar />}
      <div className='spacer h'>
        <h1 id='title' onClick={()=>{st.setView('home')}}>
          artBoard
        </h1>
      </div>
      <SearchBar />
      <div className='spacer right h'>
        {renderButton()}
      </div>
    </div>
  )
}

export default Header;

