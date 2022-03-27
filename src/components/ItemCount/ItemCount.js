import React from "react";
import "./ItemCount.css";

export const ItemCount = () => {
  return (
    <>
      <p>Item Count</p>
      <div className="card">
        <p>product</p>
        <div className="card__function">
          <button className="card__button">-</button>
          <p className="card__counter">1</p>
          <button className="card__button">+</button>
        </div>
        <button className="card__button-addCart">Add to Cart</button>
      </div>
    </>
  );
};
