import "./ItemCount.css";
import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const add = () => {
    if (stock > 0 && counter < stock) {
      setCounter(counter + 1);
    }
  };
  const remove = () => {
    if (stock > 0 && counter > 0) {
      setCounter(counter - 1);
    }
  };
  const addCart = () => {
    if (stock > 0 && counter > 0) {
      onAdd(counter);
    } else {
      console.log("stock insuficiente");
    }
  };

  return (
    <>
      <p>{stock} stock</p>
      <p>{initial} intial</p>
      <div className="card">
        <p>product</p>
        <div className="card__function">
          <button className="card__button" onClick={remove}>
            -
          </button>
          <p className="card__counter">{counter}</p>
          <button className="card__button" onClick={add}>
            +
          </button>
        </div>
        <button className="card__button-addCart" onClick={addCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
};
