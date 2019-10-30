import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context';

export default class MovieManage extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/movies/')
      .then(response => {
        this.setState({ movies: response.data.Items });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { signout } = this.context;
    console.log(this.state.movies);
    return (
      <div className="container-moviemanage">
        <Title title="Quản lý thông tin phim" />
        <Link
          onClick={() => {
            signout();
          }}
          to="/"
          className="btn"
        >
          Đăng xuất
        </Link>
        <table className="table-movie">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Director</th>
              <th>Casters</th>
              <th>Durable</th>
              <th>Style</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => {
              return (
                <tr>
                  <td>{movie.movieName}</td>
                  <td>{movie.director}</td>
                  <td>{movie.casters}</td>
                  <td>{movie.durable}</td>
                  <td>{movie.style}</td>
                  <td>{movie.ages}</td>
                  <td>
                    <Link
                      onClick={() => {
                        axios
                          .delete(
                            'http://localhost:5000/movies/' + movie.movieID
                          )
                          .then(response => {
                            alert(response.data);
                          });
                      }}
                    >
                      Delete
                    </Link>
                  </td>
                  <td>
                    <Link to={`/schedulemanage/${movie.movieID}`}>
                      Lịch chiếu
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/addmovie" className="btn">
          Thêm
        </Link>
      </div>
    );
  }
}
