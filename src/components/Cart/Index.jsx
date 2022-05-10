import { useContext, useState } from "react";
import "./styles.css";
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
    <main className="cart">
      {showList && (
        <>
          {cart.length === 0 ? (
            <section className="cart__container justify-center">
              <h2 className="cart__emptyTitle">No hay productos en carrito</h2>
            </section>
          ) : (
            <section className="cart__container flex-start">
              <div className="cart__items shadow">
                {cart.map((e) => {
                  return <CartItem key={e.id} product={e} />;
                })}
              </div>
              <p className="cart__total">Total: ${getTotal()}</p>
              <button className="cart__btn--checkout btn" onClick={handleClick}>
                Ir a Checkout
              </button>
            </section>
          )}
        </>
      )}

      {showForm && (
        <section className="cart__container flex-start">
          <CartForm submitOrder={submitOrder} />
        </section>
      )}

      {!showList && !showForm && (
        <>
          {!ticket ? (
            <section className="cart__container justify-center">
              <CircularProgress />
            </section>
          ) : (
            <section className="cart__container justify-center">
              <h2 className="cart__emptyTitle">Gracias por su compra!</h2>
              <p>
                Su <strong>ID</strong> de compra es <i>{ticket}</i>
              </p>
            </section>
          )}
        </>
      )}
    </main>
  );
};
