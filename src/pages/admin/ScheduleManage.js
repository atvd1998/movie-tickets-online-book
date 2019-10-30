import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context';

export default class MovieManage extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.match.params.movieid,
      schedules: []
    };
  }
  componentDidMount() {
    axios
      .get('http://ec2-54-167-217-242.compute-1.amazonaws.com:5000/schedules/' + this.state.movieID)
      .then(response => {
        this.setState({ schedules: response.data.Items });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { signout } = this.context;
    console.log(this.state.schedules);
    return (
      <div className="container-moviemanage">
        <Title title="Quản lý lịch chiếu" />
        <Link
          onClick={() => {
            signout();
          }}
          to="/"
          className="btn"
        >
          Đăng xuất
        </Link>
        <table className="table-movie">
          <thead>
            <tr>
              <th>ScheduleID</th>
              <th>Day</th>
              <th>Date</th>
              <th>Month</th>
              <th>Hour</th>
              <th>RoomID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.schedules.map(schedule => {
              return (
                <tr>
                  <td>{schedule.scheduleID}</td>
                  <td>{schedule.day}</td>
                  <td>{schedule.date}</td>
                  <td>{schedule.month}</td>
                  <td>{schedule.hour}</td>
                  <td>{schedule.roomID}</td>
                  <td>
                    <Link
                      onClick={() => {
                        axios
                          .delete(
                            'http://ec2-54-167-217-242.compute-1.amazonaws.com:5000/schedules/' +
                              schedule.movieID +
                              '/' +
                              schedule.scheduleID
                          )
                          .then(response => {
                            alert(response.data);
                          })
                          .then(this.props.history.push('/moviemanage'));
                      }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/addschedule" className="btn">
          Thêm
        </Link>
      </div>
    );
  }
}
