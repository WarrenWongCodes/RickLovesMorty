import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  // on change update the query
  const onSearch = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  // on click send a get request with both query AND category

  return (
    <>
      <TextField
        onChange={onSearch}
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
      />
      <SearchIcon fontSize="large" />
    </>
  );
}
