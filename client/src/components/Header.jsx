import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import cookieHandle from '../util/cookieHandle.js';

import SearchBar from './SearchBar.jsx';

const Header = function({state}) {
  var renderButton = function() {
    if (state.user) {
      return (
        <div className='login h' onClick={()=>{state.setView('profile')}}>
          profile
        </div>
      );
    } else {
      return (
        <div className='login h' onClick={()=>{state.setView('auth')}}>
          login
        </div>
      );
    }
  };

  return (
    <div className='header h'>
      <h1>artBoard</h1>
      <SearchBar state={state}/>
      {renderButton()}
    </div>
  )
}

export default Header;

