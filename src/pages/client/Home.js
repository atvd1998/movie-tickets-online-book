import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import MovieCourasel from '../../components/CouraselMovie';


export default function Home() {
  return (
   <>
      <Navbar />
      <Banner />
      <MovieCourasel />
      <Footer />
    </>
  );
}
