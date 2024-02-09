/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";

const Create = ({ setRefresh, refresh, changeView }) => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [brand, setBrand] = useState("");
  const [price_day, setPrice_day] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const add = () => {
    const obj = {
      model: model,
      year: year,
      brand: brand,
      price_day: price_day,
      color: color,
      image: image,
    };

    axios
      .post("http://localhost:3000/addCar", obj)
      .then(() => {
        window.location.replace("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="create">
      <ul>
        <input
          className="input-add"
          type="text"
          placeholder="Model"
          onChange={(e) => setModel(e.target.value)}
        />

        <input
          className="input-add"
          type="text"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          className="input-add"
          type="text"
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          className="input-add"
          type="text"
          placeholder="Price_day"
          onChange={(e) => setPrice_day(e.target.value)}
        />

        <input
          className="input-add"
          type="text"
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="input-add"
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={() => add()} className="btn">
          add
        </button>
      </ul>
    </div>
  );
};

export default Create;
