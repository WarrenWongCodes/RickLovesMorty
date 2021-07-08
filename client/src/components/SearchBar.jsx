import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({ search, click }) {
  return (
    <>
      <TextField
        onChange={search}
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
      />
      <SearchIcon onClick={click} fontSize="large" />
    </>
  );
}
