import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import SeatChart from '../../components/SeatChart';
import screen from '../../assets/images/bg-screen.png';
import Footer from '../../components/Footer';
import Schedule from '../../components/Schedule'

export default class Ticket extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Schedule />
        <Title title="Sơ đồ chỗ ngồi" />
        <div className="screen">
          <img src={screen} alt="screen" />
          <SeatChart />
          <div>
          <h4>Bạn đã chọn: </h4>
          <h6>Tổng tiền</h6>
          </div>
          <div>
            <button>Chọn lại</button>
            <button>Đặt vé</button>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
