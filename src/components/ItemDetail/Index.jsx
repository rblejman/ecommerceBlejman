import { useContext } from "react";
import { useState } from "react";
import "./styles.css";
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
    <main className="itemDetail">
      <section className="itemDetail__container">
        <img className="itemDetail__image shadow" src={product.image} alt="#" />
        <article className="itemDetail__info shadow">
          <div className="itemDetail__text">
            <h2 className="itemDetail__title">{product.title}</h2>
            <h6 className="itemDetail__description">{product.description}</h6>
            <p>
              Price: ${product.price} | Stock: {product.stock}{" "}
            </p>
          </div>

          {finalize ? (
            <div className="itemDetail__btns">
              <Link to="/">
                <button className="itemDetail__btn btn-border">
                  Seguir Comprando
                </button>
              </Link>
              <Link to="/cart">
                <button className="itemDetail__btn btn">
                  Finalizar Compra
                </button>
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
        </article>
      </section>
    </main>
  );
};
