import React from 'react';
import '../styles/giphy.scss';

export default function Giphy() {
  return (
    <section style={{ width: '100' }}>
      <div id="giphyContainer">
        <iframe title="Rick and Morty Giphy" aria-hidden="true"></iframe>
      </div>
    </section>
  );
}