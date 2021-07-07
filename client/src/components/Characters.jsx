import React from 'react';
import Character from './Character.jsx';
import '../styles/characters.scss';

export default function Characters({ characters, addFavorite }) {
  return (
    <section className="characterCards">
      {characters.results
        ? characters.results.map((character, i) => (
            <Character
              key={i}
              addFavorite={addFavorite}
              character={character}
            ></Character>
          ))
        : null}
    </section>
  );
}
