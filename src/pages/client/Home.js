import React from 'react';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import MovieList from '../../components/MovieList'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <MovieList />
      <Footer />
    </Container>
  );
}
