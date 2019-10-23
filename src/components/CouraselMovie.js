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
        id: 1,
        name: 'joker',
        img: img1,
        info: 'Joker'
      },
      {
        id: 2,
        name: 'bietdoi',
        img: img2,
        info: 'Biệt đội'
      },
      {
        id: 3,
        name: 'danongsongtu',
        img: img3,
        info: 'Đàn ông song tử'
      },
      {
        id: 4,
        name: 'thatson',
        img: img4,
        info: 'Thất sơn tâm linh'
      }
    ];
  }
  render() {
    return (
      <>
        <Title title="Phim đang chiếu" />
        <Courasel>
          {this.state.map(movie => {
            return (
              <Movie
                img={movie.img}
                name={movie.name}
                info={movie.info}
                key={movie.id}
              />
            );
          })}
        </Courasel>
      </>
    );
  }
}
