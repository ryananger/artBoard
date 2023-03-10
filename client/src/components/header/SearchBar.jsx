import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';
import ax from '../../util/ax.js';

var searchHistory = [];

const SearchBar = function() {
  var handleSearch = function(e) {
    e.preventDefault();

    st.setView('home');

    var search = {
      title: 'search' + searchHistory.length,
      query: e.target.input.value
    };

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

