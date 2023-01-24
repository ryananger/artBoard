import React, {useEffect, useState} from 'react';
import '../style.css';
import ax           from '../util/ax.js';

const featured = [
  {title: 'Wildlife', query: 'wildlife animals'},
  {title: 'Nature', query: 'nature landscapes'},
  {title: 'People', query: 'men women people faces bodies clothes posing casual'},
  {title: 'Buildings'},
  {title: 'Action', query: 'people in action combat motion'},
  {title: 'Sci-Fi', query: 'science fiction scifi space future robots mars'},
  {title: 'Fantasy', query: 'fantasy elves dwarves fae wizards dragons orcs'}
];

const Featured = function({setImageData}) {

  var handleSearch = function(index) {
    var search = featured[index];

    if (search.query) {
      ax.getFeatured(search.query, setImageData);
    } else {
      ax.getFeatured(search.title, setImageData);
    }
  };

  var renderButtons = function() {
    var buttons = [];

    featured.map(function(collection, i) {
      buttons.push(
        <div key={i} className='featuredButton' onClick={()=>{handleSearch(i)}}>
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

