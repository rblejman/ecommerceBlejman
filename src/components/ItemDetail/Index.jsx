import { useState } from "react";
import { ItemCount } from "../ItemCount/Index";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  console.log(`item detail recibido:`, product);
  const [quantity, setQuantity] = useState(0);
  const onAdd = (counter) => {
    setQuantity(counter);
    console.log(`ud. agrego ${quantity} prods a carrito`);
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
          initial={0}
          onAdd={() => onAdd()}
        />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};
