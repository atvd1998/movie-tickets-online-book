import React from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/client/Home';
import Signup from './pages/client/Signup';
import Movies from './pages/client/Movies'
import SingleMovie from './pages/client/SingleMovie'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/single-movie" component={SingleMovie}></Route>
      </Switch>
    </>
  );
}

export default App;
