import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      movie: {}
    };
  }
  componentDidMount() {
    axios
      .get('http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/movies/' + this.state.id)
      .then(response => {
        this.setState({ movie: response.data.Items[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var image;
    if (this.state.movie.img !== undefined) {
      image = require('../../' + this.state.movie.img);
    }
    console.log(image);
    return (
      <>
        <Navbar />
        <Banner />
        <Title title="Chi tiết phim" />
        <section className="sigle-movie">
          <div className="img-container-single">
            <img src={image} alt="joker" />
            <Link to={`/seat/${this.state.movie.movieID}`} className="btn-primary">
              Đặt vé
            </Link>
          </div>

          <article className="movie-info-single">
            <h4>{`Đạo diễn: ${this.state.movie.director}`}</h4>
            <h4>{`Diễn viên: ${this.state.movie.casters}`}</h4>
            <h4>{`Thể loại: ${this.state.movie.style}`}</h4>
            <h4>{`Lứa tuổi: ${this.state.movie.ages} tuổi`}</h4>
            <h4>{`Thời lượng: ${this.state.movie.durable} phút`}</h4>

            <p>{this.state.movie.detail}</p>
          </article>
        </section>
        <Footer />
      </>
    );
  }
}
