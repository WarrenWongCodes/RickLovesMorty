import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ search, click, changeCategory }) {
  return (
    <>
      <TextField
        onChange={search}
        id="outlined-search"
        label="Search field"
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
    </>
  );
}
