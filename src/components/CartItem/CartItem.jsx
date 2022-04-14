import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";
import "./styles.css";

export const CartItem = ({ product }) => {
  const { delProduct } = useContext(cartContext);
  const handleClick = () => {
    delProduct(product.id);
  };
  return (
    <div className="cartItem">
      <div className="cartItem__info">
        <p>{product.title}</p>
        <p>{product.qty} u.</p>
        <p>${product.price}</p>
      </div>

      <button className="cartItem__bttn" onClick={handleClick}>
        x
      </button>
    </div>
  );
};
