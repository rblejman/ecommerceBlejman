import { createContext, useState } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //recibe obj producto y valor qty
  const addProduct = (product, qty) => {
    //agrego qty como nuevo valor al objeto producto.
    console.log("context addProduct recibe qty:", qty);
    const newProduct = { ...product, qty };

    if (isInCart) {
      const prodFound = cart.find((product) => product.id === newProduct.id);
      const index = cart.indexOf(prodFound);
      //necesito un auxiliar para no manipular directamente
      const auxCart = [...cart];
      auxCart[index].qty += qty;
      setCart(auxCart);
    } else {
      setCart([...cart, newProduct]);
      console.log("producto agregado a carrito:", cart);
    }
  };
  const delProduct = () => {};
  const isInCart = () => {
    return false;
  };
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
