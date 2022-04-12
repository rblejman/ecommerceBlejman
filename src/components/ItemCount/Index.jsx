import "./ItemCount.css";
import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const add = () => {
    if (stock > 0 && count < stock) {
      setCount(count + 1);
      console.log("se hizo una suma", 1 + count);
    }
  };
  const remove = () => {
    if (stock > 0 && count > 0) {
      setCount(count - 1);
      console.log("se hizo una resta", count);
    }
  };

  //llamo a la funcion onAdd que esta en el padre, itemDetail y paso valor de count
  const addCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    } else {
      console.log("stock insuficiente");
    }
  };

  return (
    <>
      <div className="card">
        <p>Item</p>
        <div className="card__function">
          <button className="card__button" onClick={remove}>
            -
          </button>
          <p className="card__count">{count}</p>
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
