import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      movie: {},
      schedules: []
    };
  }
  componentDidMount() {
    axios
      .get('http://ec2-54-167-217-242.compute-1.amazonaws.com:5000/schedules/' + this.state.id)
      .then(response => {
        this.setState({ schedules: response.data.Items });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get('http://ec2-54-167-217-242.compute-1.amazonaws.com:5000/movies/' + this.state.id)
      .then(response => {
        this.setState({ movie: response.data.Items[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Title title={this.state.movie.movieName} />
        <div className="container-schedule">
          {this.state.schedules !== undefined ? (
            this.state.schedules.length === 0 ? (
              <h4>Phim này hiện chưa có lịch chiếu</h4>
            ) : (
              this.state.schedules.map(schedule => {
                return (
                  <div key={schedule.scheduleID} className="container-time">
                    <Link
                      to={`/seat/${schedule.movieID}/${schedule.roomID}/${schedule.scheduleID}`}
                    >
                      <div className="container-button">
                        <div className="container-day">
                          <h6>{schedule.date}</h6>
                          <h6>{schedule.day}</h6>
                        </div>
                        <h2>{schedule.month}</h2>
                        <div className="container-seat">
                          <h4>{schedule.hour}</h4>
                          <h6>{`${50 -
                            schedule.ticketDetail.length} ghế trống`}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )
          ) : (
            <h2>Đang lấy dữ liệu</h2>
          )}
        </div>

        <Footer />
      </>
    );
  }
}
