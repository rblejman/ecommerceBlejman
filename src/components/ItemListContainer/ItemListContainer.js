import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount.js";
import { ItemList } from "../ItemList/ItemList.js";

const initialProducts = [
  {
    title: "Patagonia",
    description: "lampara patagonia es asi asa",
    price: 20,
    stock: 10,
    pictureURL: "https://picsum.photos/200",
    id: 1,
  },
  {
    title: "Mendoza",
    description: "lampara mendoza asi asa",
    price: 20,
    stock: 10,
    pictureURL: "https://picsum.photos/200",
    id: 2,
  },
  {
    title: "Salta",
    description: "lampara salta es asi asa",
    price: 20,
    stock: 10,
    pictureURL: "https://picsum.photos/200",
    id: 3,
  },
  {
    title: "Cordoba",
    description: "lampara cordoba es asi asa",
    price: 20,
    stock: 10,
    pictureURL: "https://picsum.photos/200",
    id: 4,
  },
];

const fetchProducts = new Promise((res, rej) => {});

const ItemListContainer = ({ greeting }) => {
  let stock = 5;
  let initial = 1;

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setProducts(initialProducts);
  //   }, 2000);
  // }, []);

  const onAdd = (counter) => {
    console.log(`producto agregado ${counter} a carrito`);
  };

  return (
    <main className="listContainer">
      <h1>Bienvenido {greeting} a nuestra tienda</h1>
      <ItemList />
    </main>
  );
};
export default ItemListContainer;
