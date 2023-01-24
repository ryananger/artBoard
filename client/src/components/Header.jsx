import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import cookieHandle from '../util/cookieHandle.js';

import SearchBar from './SearchBar.jsx';

const Header = function({state}) {

  return (
    <div className='header h'>
      <h1>artBoard</h1>
      <SearchBar state={state}/>
    </div>
  )
}

export default Header;

