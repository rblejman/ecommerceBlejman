import React from "react";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount.js";

const ItemListContainer = ({ greeting }) => {
  let stock = 5;
  let initial = 1;

  const onAdd = (counter) => {
    console.log(`producto agregado ${counter} a carrito`);
  };

  return (
    <main className="listContainer">
      <h1>Bienvenido {greeting} a nuestra tienda</h1>
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </main>
  );
};
export default ItemListContainer;
