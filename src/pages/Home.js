import React from 'react';
import Card from '../components/Card'

const Home = () => {
  return (
    <container>
      <div className="logo">
        <h1>Netflix</h1>
        <h3>-----TV Recaps-----</h3>
      </div>
      <div className="trending">
        <h2>Trending</h2>
        <Card />
      </div>
      <div className="lgbt">
        <h2>LGBTQIA+</h2>
        <Card />
      </div>
      <div className="voices">
        <h2>Black Voices</h2>
        <Card />
      </div>
    </container>
  );
}

export default Home;
