import React from 'react';
import logo from '../assets/images/logo_movie-01.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-css">
      <div className="nav-header-css">
        <ul className="nav-link-css">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/movies">Phim</Link>
          </li>
        </ul>

        <ul className="nav-link-css">
          <li>
            <Link to="/signup">Đăng ký</Link>
          </li>
          <li>
            <Link to="">Đăng nhập</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
