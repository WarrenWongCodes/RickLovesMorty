import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Characters from './Characters.jsx';

export default function App() {
  const [characters, setCharacters] = useState({});

  const getAllCharacters = () => {
    axios
      .get('/characters')
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
    <main role="main">
      <h1>Rick and Morty Forever</h1>
      <Characters characters={characters} />
    </main>
  );
}
