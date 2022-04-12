import { createContext, useState } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addProduct = () => {};
  const delProduct = () => {};
  const isInCart = () => {};
  const getProductQty = () => {};
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Provider
      value={{ cart, addProduct, delProduct, getProductQty, clearCart }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
