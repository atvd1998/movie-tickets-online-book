import React from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/client/Home';
import Signup from './pages/client/Signup';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
      </Switch>
    </>
  );
}

export default App;
