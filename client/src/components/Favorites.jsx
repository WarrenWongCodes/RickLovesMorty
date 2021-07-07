import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Favorite from './Favorite.jsx';
import '../styles/characters.scss';

export default function Favorites() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const getFavorites = () => {
    axios
      .get('/favorites')
      .then(({ data }) => {
        setFavoriteCharacters(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <main className="characterCards" role="main">
      {favoriteCharacters.map((character, i) => (
        <Favorite key={i} character={character} />
      ))}
    </main>
  );
}
