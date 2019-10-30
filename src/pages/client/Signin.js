import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { UserContext } from '../../context';
import useForm from '../../components/Signin/useForm';
import validate from '../../components/Signin/validateLogin';
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const { isLogin, setUser, signin, setName } = useContext(UserContext);
  const classes = useStyles();
  function submit() {
    axios
      .get('http://localhost:5000/users/' + values.email)
      .then(response => {
        console.log(response.data.Items[0]);
        if (response.data.Items[0] === undefined) {
          alert('Vui lòng nhập đúng tên đăng nhập và mật khẩu');
        } else {
          if (
            response.data.Items[0].email !== values.email ||
            response.data.Items[0].password !== values.password
          ) {
            alert('Vui lòng nhập đúng tên đăng nhập và mật khẩu');
          } else {
            if (response.data.Items[0].email === 'admin@gmail.com') {
              signin();
              setUser(values.email);
              props.history.push('/moviemanage');
            } else {
              alert('Đăng nhập thành công');
              signin();
              setUser(values.email);
              setName(response.data.Items[0].name);
              props.history.push('/');
            }
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
