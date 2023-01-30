import React, { useState, useEffect } from 'react';
import { AiFillHeart      as Heart,
         AiFillPlusCircle as Add } from 'react-icons/ai';

import '../../styles/boardImage.css';
import ax from '../../util/ax.js';
import helpers from '../../util/helpers.js';

import st           from '../state.js';
import ImageButtons from './BoardImageButtons.jsx';

const Image = ({image, index, board}) => {
  const mod = st.boardImageSize !== 'large2x' ? 'small' : '';
  const containerStyle = {
    aspectRatio: image.width/image.height
  };

  const imageStyle = {
    aspectRatio: image.width/image.height,
    backgroundColor: image.avg_color
  };

  return (
    <div className={`boardImageContainer ${mod} v`} style={containerStyle}>
      <img
        id={'image' + index}
        src={image.src[st.boardImageSize]}
        className='boardImage'
        style={imageStyle}
      />
      {st.user.boards[0] && <ImageButtons image={image} board={board}/>}
    </div>
  );
};

export default Image;