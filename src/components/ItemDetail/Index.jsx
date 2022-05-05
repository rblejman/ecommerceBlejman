import { useContext } from "react";
import { useState } from "react";
import { ItemCount } from "../ItemCount/Index";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext.jsx";

export const ItemDetail = ({ product }) => {
  const [finalize, setFinalize] = useState(false);
  const { addProduct } = useContext(cartContext);

  //recibo de ItemCount la cantidad de producto por medio de counter, el mismo llega bien. No esta aceptando el setQuantity el valor de counter
  const onAdd = (count) => {
    console.log("item Detail: count es:", count);
    // al pasarlo count me dice que es undefined al parecer
    addProduct(product, count);
    setFinalize(true);
  };

  return (
    <div>
      <h2>ItemDetail</h2>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      {finalize ? (
        <div>
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        </div>
      ) : (
        <ItemCount
          stock={product.stock}
          id={product.id}
          initial={1}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};
