import React from 'react';
import Character from './Character.jsx';
import '../styles/characters.scss';

export default function Characters({ characters }) {
  return (
    <section id="characterCards">
      {characters.results
        ? characters.results.map((character, i) => (
            <Character key={i} character={character}></Character>
          ))
        : null}
    </section>
  );
}
