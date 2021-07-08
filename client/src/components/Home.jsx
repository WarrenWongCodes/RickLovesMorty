import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './Characters.jsx';
import PaginationLink from './Pagination.jsx';

export default function Home() {
  const [characters, setCharacters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

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
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Characters addFavorite={addToFavorites} characters={characters} />
      <PaginationLink
        pageChange={onPageChange}
        pagesAvailable={characters.info}
      />
    </>
  );
}
