import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";

const CartWidget = () => {
  const { getProductQty } = useContext(cartContext);

  const cartQty = () => {
    console.log("cartQty:", getProductQty());
    return getProductQty();
  };

  return (
    <>
      <Badge badgeContent={cartQty()} color="secondary">
        <ShoppingCartIcon />
      </Badge>
      {/* <p>{cartQty()}</p> */}
    </>
  );
};
export default CartWidget;
