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

    if (isInCart(product.id)) {
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

  // desde la vista Cart, recibo el id del producto. Dejo pasar todo lo que no sea ese id.
  const delProduct = (id) => {
    if (isInCart(id)) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      return console.log("no se pudo eliminar");
    }
  };

  // veo si existe en carrito. Luego busco en cart, accedo a indice y su cantidad.
  const getProductQty = () => {
    if (cart.length === 0) {
      return 0;
    } else {
      let counter = 0;
      cart.forEach((product) => {
        counter += product.qty;
      });
      return counter;
    }
  };

  // busca id en cart, si existe devuelve true sino false
  const isInCart = (id) => {
    const prodFound = cart.find((product) => product.id === id);

    if (prodFound) {
      return true;
    } else {
      return false;
    }
  };

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
