import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Episodes from './Episodes.jsx';

export default function App() {
  const [episodes, setEpisodes] = useState({});

  const getAllEpisodes = () => {
    axios
      .get('/episodes')
      .then((results) => {
        console.log(results.data);
        setEpisodes(results.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllEpisodes();
  }, []);

  return (
    <main role="main">
      <h1>Rick and Morty Forever</h1>
      <Episodes episodes={episodes} />
    </main>
  );
}
