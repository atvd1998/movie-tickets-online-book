import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Movie from '../../components/Movie';
import Footer from '../../components/Footer'
import img1 from '../../assets/images/joker.jpg';
import img2 from '../../assets/images/nguoituyet.jpg';
import img3 from '../../assets/images/danongsongtu.jpg';
import img4 from '../../assets/images/bietdoi.jpg';
import img5 from '../../assets/images/thatsontamlinh.jpg'
export default function Movies() {
  return (
    <>
      <Navbar />
      <Banner />
      <Title title="Phim đang chiếu" />
      <div className="grid-container">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img1" />
        <img src={img3} alt="img1" />
        <img src={img4} alt="img1" />
        <img src={img5} alt="img1" />
      </div>
      <Footer />
    </>
  );
}
