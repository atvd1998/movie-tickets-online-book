import React from 'react';
import img from '../assets/images/card_natra.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movie() {
  return (
    <article className="movie">
      <div className="img-container">
        <img src={img} alt="ATVD" />

        <div className="age-top">
          <h6>all</h6>
        </div>
        <Link to={'/'} className="btn-primary movie-link">
          Đặt vé
        </Link>
      </div>
      <p className="movie-info">Na Tra</p>
    </article>
  );
}
