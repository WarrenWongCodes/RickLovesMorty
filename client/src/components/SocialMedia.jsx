import React from 'react';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import '../styles/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section id="socialMediaFooter">
      <Typography>Binge Watch!</Typography>
      <a role="button" target="_blank" href="https://twitter.com/RickandMorty">
        <TwitterIcon fontSize="large" />
      </a>
      <a
        role="button"
        target="_blank"
        href="https://www.facebook.com/RickandMorty/"
      >
        <FacebookIcon fontSize="large" />
      </a>
      <a
        role="button"
        target="_blank"
        href="https://www.instagram.com/rickandmorty/"
      >
        <InstagramIcon fontSize="large" />
      </a>
      <a
        role="button"
        target="_blank"
        href="https://www.youtube.com/channel/UCgPClNr5VSYC3syrDUIlzLw"
      >
        <YouTubeIcon fontSize="large" />
      </a>
      <a
        role="button"
        target="_blank"
        href="https://www.reddit.com/r/rickandmorty/"
      >
        <RedditIcon fontSize="large" />
      </a>
    </section>
  );
}
