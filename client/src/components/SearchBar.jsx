import React, {useEffect, useState} from 'react';
import '../style.css';
import ax from '../util/ax.js';

var searchHistory = [];

const SearchBar = function({state}) {
  const setImageData = state.setImageData;
  const setSearch    = state.setSearch;

  var handleSearch = function(e) {
    e.preventDefault();

    var search = {
      title: 'search' + searchHistory.length,
      query: e.target.input.value
    };

    ax.searchPhotos(search.query, setImageData);

    searchHistory.push(search);
    setSearch(search);
  };

  return (
    <div className='searchBar h'>
      <form onSubmit={handleSearch}>
        <input className='searchInput' name='input' type='text' placeholder='Search!'/>
        <input type='submit' hidden />
      </form>
    </div>
  )
}

export default SearchBar;

