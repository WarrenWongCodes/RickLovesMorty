import React from 'react';
import Episode from './Episode.jsx';

export default function Episodes({ episodes }) {
  return (
    <section>
      {episodes.results
        ? episodes.results.map((episode, i) => (
            <Episode key={i} episode={episode}></Episode>
          ))
        : null}
    </section>
  );
}
