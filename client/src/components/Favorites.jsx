import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Favorite from './Favorite.jsx';
import '../styles/characters.scss';
import '../styles/favorites.scss';
import Typography from '@material-ui/core/Typography';

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

  const deleteFavorite = (name) => {
    const options = {
      method: 'delete',
      url: '/character',
      data: {
        name,
      },
    };
    axios(options)
      .then((result) => getFavorites())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <Typography variant="h3" fontSize="large">
        My Collection
      </Typography>
      <main className="characterCards" role="main">
        {favoriteCharacters.map((character, i) => (
          <Favorite key={i} character={character} del={deleteFavorite} />
        ))}
      </main>
    </>
  );
}
