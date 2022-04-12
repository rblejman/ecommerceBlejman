import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/Index";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext.jsx";

export const ItemDetail = ({ product }) => {
  console.log(`item detail recibido:`, product);
  const [quantity, setQuantity] = useState(0);

  //recibo de ItemCount la cantidad de producto por medio de counter, el mismo llega bien. No esta aceptando el setQuantity el valor de counter
  const onAdd = (counter) => {
    counter = parseInt(counter);
    console.log("item Detail: counter es:", counter);
    setQuantity(counter);
    console.log(`item detail: ud. agrego ${quantity} prods a carrito`);
  };

  return (
    <div>
      <h2>ItemDetail</h2>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      {quantity === 0 ? (
        <ItemCount
          stock={product.stock}
          id={product.id}
          initial={1}
          onAdd={onAdd}
        />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};
