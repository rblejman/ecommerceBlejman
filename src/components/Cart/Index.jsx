import { useContext } from "react";
import { cartContext } from "../Context/CartContext.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import { CartItem } from "../CartItem/CartItem.jsx";
// mapeo cart item
export const Cart = () => {
  // traigo cart desde context
  const { cart } = useContext(cartContext);
  console.log("prods traidos de cart de context:", cart);
  return (
    <div>
      {cart.length === 0 ? (
        <CircularProgress />
      ) : (
        cart.map((e) => {
          return <CartItem key={e.id} product={e} />;
        })
      )}
    </div>
  );
};
