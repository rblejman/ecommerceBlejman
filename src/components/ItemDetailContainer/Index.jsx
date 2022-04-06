import { useEffect } from "react";
import { ItemDetail } from "../ItemDetail/Index";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log("useEffect ItemDetailContainer se ejecuto");
    fetch("https://fakestoreapi.com/products/1")
      .then((data) => data.json())
      .then((item) => {
        setProduct(item);
      })
      .catch(() => {
        console.log("error ItemDetailContainer");
      });
  }, []);

  return <ItemDetail product={product} key={product.id} />;
};
