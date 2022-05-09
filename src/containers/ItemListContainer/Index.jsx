import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import "./styles.css";
import { ItemList } from "../../components/ItemList/Index";
import CircularProgress from "@mui/material/CircularProgress";

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
    <>
      {products.length === 0 ? (
        <div className="center">
          <CircularProgress />
        </div>
      ) : (
        <main className="ilc__container">
          <ItemList products={products} />
        </main>
      )}
    </>
  );
};
export default ItemListContainer;
