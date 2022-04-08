import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/Index";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { initialProducts } from "../mock/InitialProducts";

// const initialProducts = [
//   {
//     title: "Plafon",
//     description: "lamparade techo",
//     price: 10,
//     stock: 60,
//     pictureURL: "https://picsum.photos/200",
//     category: "techo",
//     id: 1,
//   },
//   {
//     title: "Araña colgante",
//     description: "lampara de techo",
//     price: 80,
//     stock: 15,
//     pictureURL: "https://picsum.photos/200",
//     category: "techo",
//     id: 2,
//   },
//   {
//     title: "Honguito",
//     description: "lampara de piso",
//     price: 30,
//     stock: 5,
//     pictureURL: "https://picsum.photos/200",
//     category: "piso",
//     id: 3,
//   },
//   {
//     title: "Farol",
//     description: "lampara de pared",
//     price: 50,
//     stock: 20,
//     pictureURL: "https://picsum.photos/200",
//     category: "pared",
//     id: 4,
//   },
//   {
//     title: "Warghol",
//     description: "lampara de mesa",
//     price: 50,
//     stock: 20,
//     pictureURL: "https://picsum.photos/200",
//     category: "mesa",
//     id: 5,
//   },
// ];

const ItemListContainer = ({ greeting }) => {
  // let stock = 5;
  // let initial = 1;

  const [products, setProducts] = useState([]);
  const fetchProduct = new Promise((res, rej) => {
    setTimeout(() => {
      res(initialProducts);
    }, 1000);
  });

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    fetchProduct
      .then((fetchedProducts) => {
        if (categoryId != undefined) {
          const filteredProds = fetchedProducts.filter(
            (product) => product.category == categoryId
          );
          setProducts(filteredProds);
        } else {
          setProducts(fetchedProducts);
        }
      })
      .catch(() => {
        console.log("todo mal");
      });
  }, [categoryId]);

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
