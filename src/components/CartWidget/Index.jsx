import React from "react";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

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
    </>
  );
};
export default CartWidget;
