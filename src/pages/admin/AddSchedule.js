import React, { useState } from 'react';
import useForm from '../../components/AddSchedule/useForm'; //Sua
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validate from '../../components/AddSchedule/validateAddSchedule';
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
    axios.post('http://ec2-54-167-217-242.compute-1.amazonaws.com:5000/schedules/add', values).then(res => {
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
            Thêm lịch chiếu
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
                  id="month"
                  label="Tháng"
                  name="month"
                  value={values.month}
                  onChange={handleChange}
                />
                {errors.month && <p className="error">{errors.month}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="date"
                  label="Ngày"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                />
                {errors.date && <p className="error">{errors.date}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="day"
                  label="Thứ"
                  name="day"
                  value={values.day}
                  onChange={handleChange}
                />
                {errors.day && <p className="error">{errors.day}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="hour"
                  label="Giờ"
                  id="hour"
                  value={values.hour}
                  onChange={handleChange}
                />
                {errors.hour && <p className="error">{errors.hour}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="roomID"
                  label="Mã phòng"
                  id="roomID"
                  value={values.roomID}
                  onChange={handleChange}
                />
                {errors.roomID && <p className="error">{errors.roomID}</p>}
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
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
