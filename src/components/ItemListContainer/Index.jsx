import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/Index";
import CircularProgress from "@mui/material/CircularProgress";

const initialProducts = [
  {
    title: "Plafon",
    description: "lampara patagonia es asi asa",
    price: 10,
    stock: 60,
    pictureURL: "https://picsum.photos/200",
    id: 1,
  },
  {
    title: "Araña colgante",
    description: "lampara mendoza asi asa",
    price: 80,
    stock: 15,
    pictureURL: "https://picsum.photos/200",
    id: 2,
  },
  {
    title: "Honguito",
    description: "lampara salta es asi asa",
    price: 30,
    stock: 5,
    pictureURL: "https://picsum.photos/200",
    id: 3,
  },
  {
    title: "Farol",
    description: "lampara cordoba es asi asa",
    price: 50,
    stock: 20,
    pictureURL: "https://picsum.photos/200",
    id: 4,
  },
];

const ItemListContainer = ({ greeting }) => {
  // let stock = 5;
  // let initial = 1;

  const [products, setProducts] = useState([]);
  const fetchProduct = new Promise((res, rej) => {
    setTimeout(() => {
      res(initialProducts);
    }, 2000);
  });

  useEffect(() => {
    console.log("useEffect se ejecuto");
    fetchProduct
      .then((fetchedProducts) => {
        console.log("todo bien, productos encontrados");
        setProducts(fetchedProducts);
        console.log("los productos son");
      })
      .catch(() => {
        console.log("todo mal");
      });
  }, []);

  const onAdd = (counter) => {
    console.log(`producto agregado ${counter} a carrito`);
  };

  return (
    <main className="listContainer">
      <h1>Bienvenido {greeting} a nuestra tienda</h1>
      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
};
export default ItemListContainer;
