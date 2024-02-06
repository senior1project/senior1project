import React from 'react'
import "./CarCard.css"
const CarCard = () => {
    const r = Math.random()
  return (
    <a href={'/car/'+r}>
    <div className='card'>
        <img  className="card-image"src={window.location.origin + "/wallpaper.jpg"} alt="" />
        <div className="card-text">
            <div className="title">Lambo</div>
            <div className="price">980 TND</div>
        </div>
    </div></a>
  )
}

export default CarCard