import React, {useEffect, useState} from 'react';
import ax from '../../util/ax.js';

import st from '../state.js';

var searchHistory = [];

const SearchBar = function() {
  const setSearch    = st.setSearch;

  var handleSearch = function(e) {
    e.preventDefault();

    var search = {
      title: 'search' + searchHistory.length,
      query: e.target.input.value
    };

    st.setView('home');
    st.setSearch(search);
    searchHistory.push(search);
    ax.searchPhotos(search.query, 1);
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

