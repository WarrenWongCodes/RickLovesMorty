import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/blurb.scss';

export default function Blurb() {
  return (
    <section id="blurbContainer">
      <Typography variant="h1">Rick Loves Morty</Typography>
      <Typography className="blurb" variant="h2">
        &#128104;&#127995;&#8205;&#128300; Mad scientist meets good hearted but
        fretful grandson Morty Smith
      </Typography>
      <Typography className="blurb" paragraph={true}>
        Stay up to date on your favorite characters and where they are in the
        galaxy.
      </Typography>
    </section>
  );
}
