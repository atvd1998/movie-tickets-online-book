import React, { useState } from 'react';
import useForm from '../../components/AddMovie/useForm'; //Sua
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validate from '../../components/AddMovie/validateAddMovie';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp(props) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const classes = useStyles();

  function submit() {
    axios.post('http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/movies/add', values).then(res => {
      alert(res.data);
      props.history.push('/moviemanage');
    });
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Thêm phim
          </Typography>
          <form
            method="/GET"
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="movieID"
                  variant="outlined"
                  required
                  fullWidth
                  id="movieID"
                  label="Mã phim: "
                  autoFocus
                  value={values.movieID}
                  onChange={handleChange}
                />
                {errors.movieID && <p className="error">{errors.movieID}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="movieName"
                  label="Tên phim"
                  name="movieName"
                  value={values.movieName}
                  onChange={handleChange}
                />
                {errors.movieName && (
                  <p className="error">{errors.movieName}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="director"
                  label="Đạo diễn"
                  name="director"
                  value={values.director}
                  onChange={handleChange}
                />
                {errors.director && <p className="error">{errors.director}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="casters"
                  label="Diễn viên"
                  name="casters"
                  value={values.caster}
                  onChange={handleChange}
                />
                {errors.casters && <p className="error">{errors.casters}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="durable"
                  label="Thời lượng"
                  id="durable"
                  value={values.durable}
                  onChange={handleChange}
                />
                {errors.durable && <p className="error">{errors.durable}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="style"
                  label="Thể loại"
                  id="style"
                  value={values.style}
                  onChange={handleChange}
                />
                {errors.style && <p className="error">{errors.style}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="ages"
                  label="Lứa tuổi"
                  id="ages"
                  value={values.ages}
                  onChange={handleChange}
                />
                {errors.ages && <p className="error">{errors.ages}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="detail"
                  label="Chi tiết"
                  id="detail"
                  value={values.detail}
                  onChange={handleChange}
                />
                {errors.detail && <p className="error">{errors.detail}</p>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Xác nhận
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
