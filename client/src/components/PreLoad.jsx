import React, { useState, useEffect } from 'react';
import ax from '../util/ax.js';

const PreLoad = ({image}) => {
  return (
    <img
      src={image.src.large2x}
      style={{display: 'none'}}
    />
  );
};

export default PreLoad;