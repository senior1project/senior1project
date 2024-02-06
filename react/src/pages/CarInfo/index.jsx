import React from 'react'
import { useParams } from 'react-router-dom'
import './CarInfo.css'

const CarInfo = () => {
    const {id} = useParams()
  return (
    <div className="container-CarInfo">
      <img
        src={window.location.origin + "/wallpaper.jpg"}
        alt=""
        className="car-image"
      />
      <div className="car-info">
        <span className="car-title">{id}</span>
        <span className="car-price">980 TND</span>
        <div className="car-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor
          possimus alias sed molestias? Consequuntur quia iste exercitationem
          voluptas quaerat, corrupti facere fugiat consectetur iure eius quidem.
          Culpa, dolorum quia.
        </div>
      </div>
    </div>
  );
}

export default CarInfo