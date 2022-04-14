import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";

export const CartItem = ({ product }) => {
  const { delProduct } = useContext(cartContext);
  const handleClick = () => {
    delProduct(product.id);
  };
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.qty}</p>
      <p>${product.price}</p>
      <button onClick={handleClick}>x</button>
    </div>
  );
};
