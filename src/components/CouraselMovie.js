import React, { Component } from 'react';
import Courasel from './Courasel';
import Movie from './Movie';
import Title from './Title';
import img1 from '../assets/images/joker.jpg';
import img2 from '../assets/images/bietdoi.jpg';
import img3 from '../assets/images/danongsongtu.jpg';
import img4 from '../assets/images/thatsontamlinh.jpg';

export default class CouraselMovie extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        img: img1,
        info: 'Joker'
      },
      {
        img: img2,
        info: 'Biet doi'
      },
      {
        img: img3,
        info: 'dan ong song tu'
      },
      {
        img: img4,
        info: 'that son tam linh'
      }
    ];
  }
  render() {
    return (
      <>
        <Title title="Phim đang chiếu" />
        <Courasel>
          {this.state.map(movie => {
            return <Movie img={movie.img} info={movie.info} />;
          })}
        </Courasel>
      </>
    );
  }
}
