import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import auth         from '../util/auth.js';
import helpers      from '../util/helpers.js';
import cookieHandle from '../util/cookieHandle.js';

const Auth = function({state}) {
  const [signUp, setSignUp] = useState(false);

  var handleSubmit = function(e) {
    e.preventDefault();

    var form = e.target;

    if (signUp) {
      auth.signUp(form.email.value, form.pass.value);
    } else {
      auth.signIn(form.email.value, form.pass.value);
    }
  };

  var renderLogin = function() {
    return (
      <form id='loginForm' className='loginForm v' onSubmit={handleSubmit}>
        <div className='loginInputs v'>
          <input className='loginInput' name='email' type='text' placeholder='Email address!'/>
          <input className='loginInput' name='pass'  type='text' placeholder='Password!'/>
        </div>
        <div className='loginButtons h'>
          <input className='loginButton' type='submit' value='sign up' onClick={()=>{setSignUp(true)}}/>
          <input className='loginButton' type='submit' value='sign in' onClick={()=>{setSignUp(false)}}/>
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

