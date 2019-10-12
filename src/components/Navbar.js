import React from 'react';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">
            Phim
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/info">
            Lịch chiếu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/info">
            Thông tin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Liên hệ
          </Link>
        </li>
      </ul>
      

      <ul className="nav nav-right">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Đăng nhập
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Đăng ký
          </Link>
        </li>
      </ul>
    </nav>
  );
}
