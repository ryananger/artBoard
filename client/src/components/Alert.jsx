import React, { useState, useEffect } from 'react';

import st      from './state.js';
import ax      from '../util/ax.js';
import helpers from '../util/helpers.js';

const Alert = ({text, type}) => {
  const [vis, setVis] = useState('visible');
  const mod = type === 'login' ? 'buttonAlert' : '';

  useEffect(function() {
    setTimeout(function() {
      setVis('hidden');
    }, 1000);
  }, []);

  return (
    <div className={`alert ${vis} ${mod} v`}>
      {text}
    </div>
  );
};

export default Alert;