import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import Characters from './Characters.jsx';
import PaginationLink from './Pagination.jsx';

export default function App() {
  const [characters, setCharacters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const getAllCharacters = () => {
    axios
      .get('/characters', {
        params: {
          pageNum: currentPage,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <main id="main" role="main">
      <h1>Rick Loves Morty</h1>
      <Characters characters={characters} />
      <PaginationLink pagesAvailable={characters.info} />
    </main>
  );
}
