import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/Index";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { initialProducts } from "../mock/InitialProducts";

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
