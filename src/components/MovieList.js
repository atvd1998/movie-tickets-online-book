import React from 'react';
import Title from './Title';
import Movie from './Movie';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  }
}));
export default function MovieList() {
  const classes = useStyles();
  return (
    <section>
      <Title title="Phim đang chiếu" />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Movie className={classes.paper} />
        </Grid>
        <Grid item xs={3}>
          <Movie className={classes.paper} />
        </Grid>
        <Grid item xs={3}>
          <Movie className={classes.paper} />
        </Grid>
        <Grid item xs={3}>
          <Movie className={classes.paper} />
        </Grid>
      </Grid>
    </section>
  );
}
