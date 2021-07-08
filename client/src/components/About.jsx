import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/about.scss';
import '../styles/character.scss';

export default function About() {
  const [isLearnMoreClicked, setClick] = useState(false);

  const learnMoreHandler = () => {
    setClick(!isLearnMoreClicked);
  };

  return (
    <>
      <div id="aboutContainer">
        <Typography fontSize="medium" variant="h3">
          Hi, I'm Warren, a software engineer who enjoys an episode or two of
          Rick and Morty when I'm not coding or traveling.
        </Typography>
        <Typography fontSize="large">
          A full stack application built using React.js, Node.js, Express,
          Material-UI, SASS, and of course the Rick and Morty API!
        </Typography>
        <Typography fontSize="small">
          Credit goes to the Rick and Morty API found{' '}
          <a href="https://rickandmortyapi.com/" target="_blank">
            here.
          </a>
        </Typography>
      </div>
      <div id="contactCardContainer">
        <Card className="characterCard">
          <CardActionArea>
            <CardContent>
              {isLearnMoreClicked ? (
                <div id="contactInfo">
                  <Typography fontSize="large">Warren Wong</Typography>
                  <a href="mailto:warren.wong4@gmail.com" target="_blank">
                    E-mail
                  </a>
                  <a href="https://github.com/WarrenWongCodes" target="_blank">
                    GitHub Projects
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iamwarrenwong/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/warren_wong4" target="_blank">
                    Twitter
                  </a>
                </div>
              ) : (
                <>
                  <Typography>Get in touch!</Typography>
                </>
              )}
            </CardContent>
            {isLearnMoreClicked ? null : (
              <CardMedia
                component="img"
                alt="head shot of Warren Wong"
                height="300"
                width="300"
                image="https://avatars.githubusercontent.com/u/8570718"
                title="Warren Wong"
              />
            )}
          </CardActionArea>
          <div className="characterBtn">
            <CardActions>
              <Button onClick={learnMoreHandler} size="small" color="default">
                Details
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </>
  );
}
