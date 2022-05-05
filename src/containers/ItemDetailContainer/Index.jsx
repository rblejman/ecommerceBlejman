import { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/Index";
import CircularProgress from "@mui/material/CircularProgress";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  //llega id de producto por router params
  const { itemId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, itemId);
    getDoc(refDoc)
      .then((result) => {
        const id = result.id;
        const item = { id, ...result.data() };
        setProduct(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <>
      {product ? (
        <ItemDetail product={product} key={product.id} />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
