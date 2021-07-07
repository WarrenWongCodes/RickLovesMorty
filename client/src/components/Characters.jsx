import React from 'react';
import Character from './Character.jsx';

export default function Characters({ characters }) {
  return (
    <section>
      {characters.results
        ? characters.results.map((character, i) => (
            <Character key={i} character={character}></Character>
          ))
        : null}
    </section>
  );
}
