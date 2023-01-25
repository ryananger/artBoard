import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';
import auth         from '../util/auth.js';
import helpers      from '../util/helpers.js';
import cookieHandle from '../util/cookieHandle.js';

const Login = function({state}) {
  const [signUp, setSignUp] = useState(false);
  const setUser = state.setUser;

  var handleSubmit = function(e) {
    e.preventDefault();

    var form = e.target;

    if (signUp) {
      auth.signUp(form.email.value, form.pass.value, state);
    } else {
      auth.signIn(form.email.value, form.pass.value, state);
    }
  };

  var renderForm = function() {
    return (
      <form id='loginForm' className='loginForm v' onSubmit={handleSubmit} autoComplete>
        <div className='formHead v'>
          <h2>
            Welcome to artBoard!
          </h2>
        </div>
        <div className='formBody v'>
          <div className='loginInputs v'>
            <input className='loginInput' name='email' autoComplete='off' type='text' placeholder='Email address!'/>
            <input className='loginInput' name='pass'  autoComplete='off' type='password' placeholder='Password!'/>
          </div>
          {renderSubmit()}
          <div className='signUpText' onClick={()=>{setSignUp(true)}}>
            {!signUp && 'Create an account?'}
          </div>
        </div>

        <div className='backButton' onClick={()=>{state.setView('home')}}>
          back
        </div>
      </form>
    )
  };

  var renderSubmit = function() {
    if (!signUp) {
      return (
        <div className='loginButtons h'>
          <input className='loginButton' type='submit' value='sign in'/>
        </div>
      )
    } else {
      return (
        <div className='loginButtons h'>
          <input className='loginButton' type='submit' value='sign up'/>
        </div>
      )
    }

  };

  return (
    <div className='auth v'>
      {renderForm()}
    </div>
  )
};

export default Login;

