import React, { Component } from 'react';
import EventSeat from '@material-ui/icons/EventSeat';
import Title from '../../components/Title';
import screen from '../../assets/images/bg-screen.png';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import axios from 'axios';
import { UserContext } from '../../context';
const uuid = require('uuid/v1');

export default class SeatChart extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.match.params.id,
      roomID: this.props.match.params.roomid,
      scheduleID: this.props.match.params.scheduleid,
      gheDaChon: [],
      tongGhe: [],
      gheChon: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        'http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/schedules/' +
          this.state.movieID +
          '/' +
          this.state.scheduleID
      )
      .then(response => {
        this.setState({
          gheDaChon: response.data.Items[0].ticketDetail.map(
            ticket => ticket.seatID
          )
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get('http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/seats/' + this.state.roomID)
      .then(response => {
        this.setState({ tongGhe: response.data.Items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = event => {
    //console.log(event.target.value)
    if (event.target.value !== undefined) {
      if (
        this.state.gheChon.length === 5 &&
        event.target.className === 'not-clicked'
      ) {
        alert('Chỉ được phép đặt 5 ghế 1 lần');
      } else {
        if (event.target.className === 'not-clicked') {
          this.state.gheChon.push(event.target.value);
          this.setState({
            gheChon: this.state.gheChon
          });
          event.target.className = 'clicked';
        } else {
          this.state.gheChon.splice(
            this.state.gheChon.indexOf(event.target.value),
            1
          );
          this.setState({
            gheChon: this.state.gheChon
          });
          event.target.className = 'not-clicked';
        }
      }
    }
  };

  handleClick2 = () => {
    if (this.state.gheChon.length === 0) {
      alert('Vui lòng chọn ghế');
    } else {
      this.state.gheChon.forEach(ghe => {
        axios
          .get(
            'http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/schedules/add/' +
              this.state.movieID +
              '/' +
              this.state.scheduleID,
            {
              params: {
                ticketDetailID: uuid(),
                seatID: ghe
              }
            }
          )
          .then(res => res.data)
          .catch(error => {
            console.log(error);
          });
      });
      alert('Thanh toán thành công');
      this.props.history.push('/');
    }

    
    
  };

  render() {
    const { isLogin, user } = this.context;
    console.log(user);
    console.log(this.state.gheChon);
    return (
      <>
        <Navbar />
        <Banner />
        <Title title="Sơ đồ chỗ ngồi" />

        <div className="screen">
          <img src={screen} alt="screen" />
          <div className="grid-container-seat" ref={'grid'}>
            {this.state.tongGhe
              .map(seat => seat.seatID)
              .sort()
              .map(seat => {
                return (
                  <div className="grid-item">
                    <button
                      className="not-clicked"
                      disabled={
                        this.state.gheDaChon.includes(seat) ? true : false
                      }
                      value={seat}
                      onClick={this.handleClick}
                    >
                      <EventSeat />
                      {seat}
                    </button>
                  </div>
                );
              })}
          </div>
          <div>
            {this.state.gheChon.map(ghe => {
              return <h6>{`Bạn đã chọn ghế ${ghe}`}</h6>;
            })}
            <h6>{`Tổng tiền : ${this.state.gheChon.length * 50000} đồng`}</h6>
          </div>
          <div>
            <button className="btn-primary" onClick={this.handleClick2}>
              Thanh toán
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
