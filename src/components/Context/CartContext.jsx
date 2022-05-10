import { createContext, useState } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, qty) => {
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

  const delProduct = (id) => {
    if (isInCart(id)) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      return console.log("no se pudo eliminar");
    }
  };

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

  const getTotal = () => {
    if (cart.length === 0) {
      return 0;
    } else {
      let counter = 0;
      cart.forEach((product) => {
        counter += product.price * product.qty;
      });
      return counter;
    }
  };

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
      value={{
        cart,
        addProduct,
        delProduct,
        getProductQty,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </Provider>
  );
};
