import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/Index";
import { initialProducts } from "../mock/InitialProducts";
import CircularProgress from "@mui/material/CircularProgress";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const fetchProduct = new Promise((res, rej) => {
    setTimeout(() => {
      res(initialProducts);
    }, 2000);
  });

  //llega id de producto por router params
  const { itemId } = useParams();

  console.log(`recibido por useParams ID:`, parseInt(itemId));

  useEffect(() => {
    fetchProduct
      .then((fetchedProducts) => {
        if (itemId) {
          setProduct(
            fetchedProducts.filter((product) => product.id === parseInt(itemId))
          );
        } else {
          setProduct("no existe");
        }
      })
      .catch(() => {
        console.log("todo mal");
      });

    // console.log("useEffect ItemDetailContainer se ejecuto");
    // fetch("https://fakestoreapi.com/products/1")
    //   .then((data) => data.json())
    //   .then((item) => {
    //     setProduct(item);
    //   })
    //   .catch(() => {
    //     console.log("error ItemDetailContainer");
    //   });
  }, [itemId]);

  return (
    <>
      {product[0] ? (
        <ItemDetail product={product[0]} key={product[0].id} />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

// se esta montando itemDetail antes que reciba el objeto o no se renderiza, ver console.log
