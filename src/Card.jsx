import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style= {
  margin:"20px"
}

export const CardItems = ({ cardData, onDelete }) => {

  return (
    <Card style={style}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardData.name}
        </Typography>
        <Typography variant="h5" component="h2">
          something
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" value={cardData.id} onClick={e=> onDelete(e)}>Delete</Button>
      </CardActions>
    </Card>
  );
};