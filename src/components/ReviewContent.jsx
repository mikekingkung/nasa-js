import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: red[500],
  },
  container: {
    height: "100%",
    width: '100%',
    padding: "10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor: red[500],
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    backgroundColor: red[500],
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ReviewContent = ({cardscontent}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Grid container className="classes.container">
        <Grid item xs={6} style={{ padding: 20 , maxWidth: 100}}>
          <Box m={1} display="flex" alignItems="justify" flexDirection="row">
            {Array.isArray(cardscontent) && cardscontent.length > 0 ? (
              cardscontent.map((card) => (
                <div key ={card.id}>
                <Grid container  style={{ padding: 20}}>
                  <Card className={classes.root} >
                    <CardHeader
                      avatar={
                        <Avatar aria-label="card" className={classes.avatar}>
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings" className={classes.avatar}>
                          <MoreVertIcon/>
                        </IconButton>
                      }
                      title={card.title}
                      subheader={card.subheder}
                    />
                    <CardMedia
                      style={{ height: 300, width: 250 }}
                      className={classes.media}
                      image={card.image}
                      title={card.title}>
                    </CardMedia>  

                    <CardContent>
                      <Typography variant="body2" color="primary" component="p">
                          {card.content1}
                      </Typography>
                    </CardContent>

                    <CardActions disableSpacing style={{color: red}}>
                      <IconButton aria-label="add to favorites" className={classes.avatar}> 
                        <FavoriteIcon />
                      </IconButton>
                      
                      <IconButton aria-label="share" className={classes.avatar}>
                        <ShareIcon style={{ color: red}}/>
                      </IconButton>

                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        primary="colorPrimary"
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon className={classes.avatar}/>
                      </IconButton>
                    </CardActions>
                      
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph color="primary">Method:</Typography>
                        <Typography paragraph color="primary">
                        {card.content2}
                        </Typography>
                        <Typography paragraph color="primary">
                        {card.content3}
                        </Typography>
                        <Typography color="primary">
                        {card.content4}
                        </Typography>
                        <Typography color="primary">
                        {card.content5}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                  </Grid>
                </div>
              ))
              ): (
                  <Grid container item xs={6}>
                    <h1>No cards found</h1>
                  </Grid>
                )
            }
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReviewContent;
