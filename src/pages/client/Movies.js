import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Movie from '../../components/Movie';
import Footer from '../../components/Footer';
import axios from 'axios';
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvai: 1,
      movies: [],
      searchMovies: []
    };
  }
  componentDidMount() {
    axios
      .get('http://ec2-18-232-97-190.compute-1.amazonaws.com:5000/movies/')
      .then(response => {
        this.setState({ movies: response.data.Items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      searchMovies: this.state.movies.filter(movie => {
        return movie.movieName === event.target.value;
      })
    });
    console.log(this.state.searchMovies);
  };

  render() {
    console.log(this.state.movies);
    return (
      <>
        <Navbar />
        <Banner />
        <div className="container-movies-page">
          <div>
            <button
              className="btn-primary"
              onClick={() => this.setState({ isAvai: 1 })}
            >
              Phim đang chiếu
            </button>
            <button
              className="btn-primary"
              onClick={() => this.setState({ isAvai: 0 })}
            >
              Phim sắp chiếu
            </button>
          </div>
          <form>
            <label>Tìm kiếm</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="search"
              id="search"
            />
          </form>
        </div>
        <Title
          title={this.state.isAvai === 1 ? 'Phim đang chiếu' : 'Phim sắp chiếu'}
        />
        <div className="grid-container-movie">
          {this.state.searchMovies.length > 0
            ? this.state.searchMovies.map(movie => {
                let image = require('../../' + movie.img);
                return (
                  <Movie
                    className="single-movie"
                    img={image}
                    name={movie.movieID}
                    info={movie.movieName}
                    age={movie.ages}
                    key={movie.movieID}
                  />
                );
              })
            : this.state.isAvai === 1
            ? this.state.movies
                .filter(movie => {
                  return movie.state === 'available';
                })
                .map(movie => {
                  let image = require('../../' + movie.img);
                  return (
                    <Movie
                      className="single-movie"
                      img={image}
                      name={movie.movieID}
                      info={movie.movieName}
                      age={movie.ages}
                      key={movie.movieID}
                    />
                  );
                })
            : this.state.movies
                .filter(movie => {
                  return movie.state === 'notavailable';
                })
                .map(movie => {
                  return <p>{movie.movieName}</p>;
                })}
        </div>
        <Footer />
      </>
    );
  }
}
