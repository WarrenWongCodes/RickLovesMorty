import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './Characters.jsx';
import SearchBar from './SearchBar.jsx';
import PaginationLink from './Pagination.jsx';

export default function CharacterPage() {
  const [characters, setCharacters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('name');

  const onSearch = (e) => setQuery(e.target.value);

  const changeCategory = (e) => setCategory(e.target.value);

  const searchHandler = () => {
    axios
      .get('/filter', {
        params: {
          category,
          query,
        },
      })
      .then(({ data }) => setCharacters(data))
      .catch((err) => console.log(err));
  };

  const getAllCharacters = () => {
    axios
      .get('/characters', {
        params: {
          pageNum: currentPage,
        },
      })
      .then(({ data }) => setCharacters(data))
      .catch((err) => console.log(err));
  };

  const onPageChange = (e) => {
    setCurrentPage(Number(e.target.innerText));
    getAllCharacters();
  };

  const addToFavorites = (characterInfo) => {
    const options = {
      method: 'post',
      url: '/character',
      data: characterInfo,
    };

    axios(options)
      .then(({ data }) => console.log(data))
      .catch((err) => {
        console.log(err);
        alert('Already in your collection!');
      });
  };

  useEffect(() => {
    getAllCharacters();
  }, [currentPage, category]);

  return (
    <>
      <SearchBar
        search={onSearch}
        click={searchHandler}
        changeCategory={changeCategory}
      />
      <Characters addFavorite={addToFavorites} characters={characters} />
      <PaginationLink
        pageChange={onPageChange}
        pagesAvailable={characters.info}
      />
    </>
  );
}
