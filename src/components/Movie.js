import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movie({ img, info, name }) {
  return (
    <article className="movie">
      <div className="img-container">
        <img src={img} alt="ATVD" />
        <div className="age-top">
          <h6>all</h6>
        </div>
        <div className="movie-link">
          <Link to={`/movies/${name}`} className="btn-primary">
            Đặt vé
          </Link>
          <Link to={`/movies/${name}`} className="btn-primary">
            Chi tiết
          </Link>
        </div>
      </div>
      <p className="movie-info">{info}</p>
    </article>
  );
}
