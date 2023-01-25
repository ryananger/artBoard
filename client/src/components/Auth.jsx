import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import auth         from '../util/auth.js';
import helpers      from '../util/helpers.js';
import cookieHandle from '../util/cookieHandle.js';

const Auth = function({state}) {
  const [signUp, setSignUp] = useState(false);


  var renderLogin = function() {
    return (
      <form id='loginForm' className='loginForm v'>
        <div className='loginInputs v'>
          <input className='loginInput' type='text' placeholder='Email address!'/>
          <input className='loginInput' type='text' placeholder='Password!'/>
        </div>
        <div className='loginButtons h'>
          <input className='loginButton' type='submit' value='sign up'/>
          <input className='loginButton' type='submit' value='sign in'/>
        </div>
      </form>
    )
  };

  return (
    <div className='auth v'>
      {renderLogin()}
    </div>
  )
};

export default Auth;

