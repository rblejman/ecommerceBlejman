import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/Index";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  // recibo la categoria por useparams. Si esta definido lo uso para filtrar, sino traigo todo
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = query(
      productsCollection,
      where("category", "==", `${categoryId}`)
    );
    getDocs(categoryId ? q : productsCollection)
      .then((result) => {
        const docs = result.docs;
        const prodList = docs.map((element) => {
          const id = element.id;
          const product = { id, ...element.data() };
          return product;
        });

        // console.log(prodList);
        setProducts(prodList);
      })
      .catch((error) => {
        console.log(error);
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
