import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';

const featured = [
  {title: 'Wildlife'},
  {title: 'Nature'},
  {title: 'People'},
  {title: 'Buildings'},
  {title: 'Action'},
  {title: 'Sci-Fi'},
  {title: 'Fantasy'}
];

const Featured = function() {

  var renderButtons = function() {
    var buttons = [];

    featured.map(function(collection, i) {
      buttons.push(
        <div key={i} className='featuredButton'>
          {collection.title}
        </div>
      );
    })

    return buttons;
  };

  return (
    <div className='featuredButtons h'>
      {renderButtons()}
    </div>
  )
}

export default Featured;

