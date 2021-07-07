import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/character.scss';

export default function Character({ character }) {
  const [isLearnMoreClicked, setClick] = useState(false);

  const learnMoreHandler = () => {
    setClick(!isLearnMoreClicked);
  };

  return (
    <Card className="characterCard">
      <CardActionArea>
        <CardContent>
          {isLearnMoreClicked ? (
            <>
              <Typography>Alias: {character.name}</Typography>
              <Typography>Status: {character.status}</Typography>
              <Typography>Species: {character.species}</Typography>
              <Typography>Gender: {character.gender}</Typography>
              <Typography>Origin: {character.origin.name}</Typography>
              <Typography>
                Current Location: {character.location.name}
              </Typography>
            </>
          ) : (
            <>
              <Typography>{character.name}</Typography>
            </>
          )}
        </CardContent>
        {isLearnMoreClicked ? null : (
          <CardMedia
            component="img"
            alt={`${character.name} card image`}
            height="300"
            width="300"
            image={character.image}
            title={character.name}
          />
        )}
      </CardActionArea>
      <CardActions>
        <Button onClick={learnMoreHandler} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
