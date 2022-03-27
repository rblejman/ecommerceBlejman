import React from "react";
import { ItemCount } from "./ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>Bienvenido {greeting} a nuestra tienda</h1>
      <ItemCount />
    </>
  );
};
export default ItemListContainer;
