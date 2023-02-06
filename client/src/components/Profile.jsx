import React, {useEffect, useState} from 'react';

import '../styles/profile.css';
import st      from 'ryscott-st';
import ax      from '../util/ax.js';
import helpers from '../util/helpers.js';

const Profile = function() {

  return (
    <div className='profile v'>
      <div className='profileBody v'>
        <br/>
        There is nothing here yet. Sorry!
        <br/>
        <br/>
        <div className='backButton' onClick={()=>{st.setView('home')}}>
          back
        </div>
      </div>

    </div>
  )
};

export default Profile;

