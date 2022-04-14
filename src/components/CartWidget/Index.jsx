import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";

const CartWidget = () => {
  const { getProductQty } = useContext(cartContext);

  return (
    <>
      <ShoppingCartIcon />
      {/* <p>{getProductQty()}</p> */}
    </>
  );
};
export default CartWidget;
