import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Movie from '../../components/Movie';
import Footer from '../../components/Footer';
import img1 from '../../assets/images/joker.jpg';
import img2 from '../../assets/images/nguoituyet.jpg';
import img3 from '../../assets/images/danongsongtu.jpg';
import img4 from '../../assets/images/bietdoi.jpg';
import img5 from '../../assets/images/thatsontamlinh.jpg';
export default function Movies() {
  const [state, setState] = useState({
    value: 1
  });
  const [movie, setMovie] = useState({
    imgs: [
      { id: 1, img: img1, state: 1 },
      { id: 2, img: img2, state: 1 },
      { id: 3, img: img3, state: 1 },
      { id: 4, img: img4, state: 0 },
      { id: 5, img: img5, state: 0 }
    ]
  });

  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <button onClick={() => setState({ value: 1 })}>Phim đang chiếu</button>
        <button onClick={() => setState({ value: 0 })}>Phim sắp chiếu</button>
      </div>
      <Title title={state.value === 1 ? 'Phim đang chiếu' : 'Phim sắp chiếu'} />
      <div className="grid-container-movie">
        {state.value === 1
          ? movie.imgs
              .filter(movie => {
                return movie.state === 1;
              })
              .map(movie => {
                return <img src={movie.img} key={movie.id} alt="avaimovie" />;
              })
          : movie.imgs
              .filter(movie => {
                return movie.state === 0;
              })
              .map(movie => {
                return (
                  <img src={movie.img} key={movie.id} alt="notavaimovie" />
                );
              })}
      </div>
      <Footer />
    </>
  );
}
