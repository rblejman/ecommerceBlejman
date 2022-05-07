import "./styles.css";
import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const add = () => {
    if (stock > 0 && count < stock) {
      setCount(count + 1);
    }
  };
  const remove = () => {
    if (stock > 0 && count > 0) {
      setCount(count - 1);
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
      <div className="counter">
        <div className="counter__function">
          <button className="counter__button" onClick={remove}>
            -
          </button>
          <p className="counter__number">{count}</p>
          <button className="counter__button" onClick={add}>
            +
          </button>
        </div>
        <button className="card__button-addCart" onClick={addCart}>
          Agregar a Carrito
        </button>
      </div>
    </>
  );
};
