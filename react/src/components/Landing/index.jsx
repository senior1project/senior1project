import React from 'react'
import './landing.css'
import CarCard from '../CarCard';
const Landing = () => {
  return (
    <div className="container">
      <img
        className="landing-img"
        src={window.location.origin + "/wallpaper.jpg"}
      />
      <div className="description">
        description
        <br />
        dfsghfdshngjfds <span>650$/ jour</span>
      </div>
      <div className="search">
        <h1>Search</h1>
        <input />
        <br />
        <button>Search</button>
      </div>
      <div className="wrapper">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}

export default Landing