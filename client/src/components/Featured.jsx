import React, {useEffect, useState} from 'react';
import '../styles/featured.css';
import ax      from '../util/ax.js';
import helpers from '../util/helpers.js';

const featured = [
  {title: 'Wildlife', query: 'wildlife animals'},
  {title: 'Nature', query: 'nature landscapes'},
  {title: 'People', query: 'man woman men women people faces bodies clothes posing casual'},
  {title: 'Buildings', query: 'buildings'},
  {title: 'Action', query: 'people in action combat motion'},
  {title: 'Sci-Fi', query: 'science-fiction scifi alien space robots mars'},
  {title: 'Fantasy', query: 'elves dwarves fae forest dragons orcs'}
];

const Featured = function({state}) {
  const setImageData = state.setImageData;
  const setSearch = state.setSearch;

  var handleSearch = function(index) {
    var search = featured[index];

    ax.searchPhotos(search.query, 1 + helpers.rand(2), setImageData);

    setSearch(search);
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

