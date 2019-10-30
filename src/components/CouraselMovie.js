import React, { Component } from 'react';
import Courasel from './Courasel';
import Movie from './Movie';
import Title from './Title';
import axios from 'axios';

export default class CouraselMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
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
  render() {
    return (
      <>
        <Title title="Phim đang chiếu" />
        <Courasel>
          {this.state.movies.map(movie => {
            let image = require('../' + movie.img);
            return (
              <Movie
                img={image}
                name={movie.movieID}
                info={movie.movieName}
                age={movie.ages}
                key={movie.movieID}
              />
            );
          })}
        </Courasel>
      </>
    );
  }
}
