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
import CircularProgress from "@mui/material/CircularProgress";
import { CartItem } from "../CartItem/CartItem.jsx";

export const Cart = () => {
  const { cart, getTotal, clearCart } = useContext(cartContext);
  console.log("prods traidos de cart de context:", cart);
  const [ticket, setTicket] = useState("");

  // reemplazar por un formulario que capture dichos valores
  const buyer = { name: "Juan", surname: "Perez", email: "juanpe@gmail.com" };

  useEffect(() => {
    //Boton final para enviar la compra
    const endPurchase = () => {
      const purchaseColl = collection(db, "purchase");
      addDoc(purchaseColl, {
        buyer: buyer,
        items: cart,
        date: serverTimestamp(),
        total: getTotal(),
      }).then((result) => {
        setTicket(result.id);
      });
    };

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

    clearCart();
    endPurchase();
  }, []);

  // const handleClick = () => {
  //   endPurchase();
  // };

  return (
    <div>
      {cart.length === 0 ? (
        <h2>No hay productos en carrito</h2>
      ) : (
        cart.map((e) => {
          return <CartItem key={e.id} product={e} />;
        })
      )}
      <button>Finalizar Compra</button>
      {ticket ? <p>Gracias por su compra! Su id es {ticket} </p> : <></>}
    </div>
  );
};
