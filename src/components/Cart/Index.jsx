import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { cartContext } from "../Context/CartContext.jsx";
import { CartItem } from "../CartItem/CartItem.jsx";
import { CartForm } from "../CartForm/CartForm";
import CircularProgress from "@mui/material/CircularProgress";

export const Cart = () => {
  const { cart, getTotal, clearCart } = useContext(cartContext);
  const [ticket, setTicket] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);

  // reemplazar por un formulario que capture dichos valores
  // const user = { name: "Juan", surname: "Perez", email: "juanpe@gmail.com" };

  //Boton final para enviar la compra

  const handleClick = () => {
    setShowList(false);
    setShowForm(true);
  };
  const submitOrder = (user) => {
    const ordersColl = collection(db, "orders");
    addDoc(ordersColl, {
      buyer: user,
      items: cart,
      date: serverTimestamp(),
      total: getTotal(),
    }).then((result) => {
      setTicket(result.id);
    });

    // actualizo el stock
    cart.forEach((element) => {
      const productsCollection = collection(db, "products");
      const refDoc = doc(productsCollection, element.id);
      const updateColl = doc(db, "products", element.id);
      getDoc(refDoc)
        .then((result) => {
          const item = result.data();
          const newStock = item.stock - element.qty;
          console.log(`nuevo stock actualizado de : `, element.title, newStock);
          updateDoc(updateColl, { stock: newStock });
        })
        .catch((error) => {
          console.log(error);
        });
    });
    setShowForm(false);
    clearCart();
  };

  return (
    <div>
      {showList && (
        <>
          {cart.length === 0 ? (
            <h2>No hay productos en carrito</h2>
          ) : (
            cart.map((e) => {
              return <CartItem key={e.id} product={e} />;
            })
          )}
          <p>Total: ${getTotal()}</p>
          <button onClick={handleClick}>Ir a Checkout</button>
        </>
      )}

      {showForm && <CartForm submitOrder={submitOrder} />}

      {!showList && !showForm && (
        <>
          {!ticket ? (
            <CircularProgress />
          ) : (
            <p>Gracias por su compra! Su id es {ticket} </p>
          )}
        </>
      )}
    </div>
  );
};
