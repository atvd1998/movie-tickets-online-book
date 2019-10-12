import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import img1 from '../../assets/images/joker.jpg';

export default class SingleMovie extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Title title="Chi tiết phim" />
        <section className="sigle-movie">
          <div className="img-container-single">
            <img src={img1} alt="joker" />
            <button>Đặt vé</button>
          </div>

          <article className="movie-info-single">
            <h3>Diễn viên</h3>
            <h6>ATVD</h6>
            <p>iso</p>

            <h3>Thông tin</h3>
            <h6>ATVD</h6>
          </article>
        </section>
      </>
    );
  }
}
