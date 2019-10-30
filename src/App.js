import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/client/Home';
import Signup from './pages/client/Signup';
import Movies from './pages/client/Movies';
import SingleMovie from './pages/client/SingleMovie';
import Signin from './pages/client/Signin';
import Seat from './pages/client/Seat';
import SeatChart from './pages/client/SeatChart';
import MovieManage from './pages/admin/MovieManage';
import AddMovie from './pages/admin/AddMovie';
import AddSchedule from './pages/admin/AddSchedule';
import ScheduleManage from './pages/admin/ScheduleManage';
import { useContext } from 'react';
import { UserContext } from './context';

function App() {
  const { isLogin } = useContext(UserContext);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/movies/:id" component={SingleMovie}></Route>
        <Route
          exact
          path="/seat/:id/:roomid/:scheduleid"
          component={isLogin === true ? SeatChart : Signin}
        ></Route>
        <Route
          exact
          path="/seat/:id"
          component={isLogin === true ? Seat : Signin}
        ></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/moviemanage" component={MovieManage}></Route>
        <Route exact path="/addmovie" component={AddMovie}></Route>
        <Route
          exact
          path="/moviemanage/:movieid"
          component={MovieManage}
        ></Route>
        <Route exact path="/addschedule" component={AddSchedule}></Route>
        <Route
          exact
          path="/schedulemanage/:movieid"
          component={ScheduleManage}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
