import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { UserContext } from '../context';

export default class Navbar extends Component {
  static contextType = UserContext;
  render() {
    const { isLogin, user, signout, name } = this.context;
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
              {isLogin === true ? (
                <Link to="/">{name}</Link>
              ) : (
                <Link to="/signup">Đăng ký</Link>
              )}
            </li>
            <li>
              {isLogin === true ? (
                <Link
                  onClick={() => {
                    signout();
                  }}
                  to="/"
                >
                  Đăng xuất
                </Link>
              ) : (
                <Link to="/signin">Đăng nhập</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
