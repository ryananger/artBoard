import React, { useState, useEffect } from 'react';

import st      from './state.js';
import ax      from '../util/ax.js';
import helpers from '../util/helpers.js';

var to1, to2;

const Alert = () => {
  const [alerts, intAlerts] = useState(0);
  const [alerting, setAlert] = useState(false);
  const [vis, setVis] = useState('hidden');

  st.alerting  = alerting;
  st.setAlert  = setAlert;
  st.alerts    = alerts;
  st.intAlerts = intAlerts;

  useEffect(function() {
    if (!alerting) {return;}

    clearTimeout(to1);
    clearTimeout(to2);

    setVis('');

    to1 = setTimeout(function() {
      setVis('hidden');

      to2 = setTimeout(()=>{setAlert(false)}, 1000);
    }, 1500);
  }, [alerts]);

  return (
    <div className={`alert ${vis} v`}>
      {alerting}
    </div>
  );
};

export default Alert;