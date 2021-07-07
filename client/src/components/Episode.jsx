import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Episode({ episode }) {
  const [isLearnMoreClicked, setClick] = useState(false);

  const learnMoreHandler = () => {
    setClick(!isLearnMoreClicked);
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          {isLearnMoreClicked ? (
            <>
              <Typography>Aired on: {episode.air_date}</Typography>
              <Typography>Episode created on: {episode.created}</Typography>
            </>
          ) : (
            <>
              <Typography>{episode.name}</Typography>
              <Typography>{episode.episode}</Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={learnMoreHandler} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
