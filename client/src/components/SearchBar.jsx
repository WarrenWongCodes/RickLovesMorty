import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/searchBar.scss';

export default function SearchBar({ search, click, changeCategory }) {
  return (
    <div id="searchContainer">
      <Typography fontSize="large">
        Learn what your favorite characters are up to and collect cards!
      </Typography>
      <div id="searchBar">
        <TextField
          onChange={search}
          id="outlined-search"
          label="Search here ..."
          type="search"
          variant="outlined"
        />
        <TextField
          id="outlined-select-category-native"
          label="Category"
          onChange={changeCategory}
          helperText="name, status, species, type, gender"
          variant="outlined"
        />
        <SearchIcon onClick={click} fontSize="large" />
      </div>
    </div>
  );
}
