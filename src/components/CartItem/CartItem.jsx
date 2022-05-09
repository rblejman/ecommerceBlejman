import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";
import "./styles.css";

export const CartItem = ({ product }) => {
  const { delProduct } = useContext(cartContext);
  const handleClick = () => {
    delProduct(product.id);
  };
  return (
    <div className="cartItem shadow">
      <p>{product.title}</p>

      <p className="cartItem__text">
        {product.qty} u. | ${product.price}
      </p>

      <button className="cartItem__btn btn" onClick={handleClick}>
        x
      </button>
    </div>
  );
};
