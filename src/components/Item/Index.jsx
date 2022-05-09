import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="card shadow">
      <img className="card__img" src={product.image} alt="" />
      <div className="card__info">
        <h1 className="card__title">{product.title}</h1>
        <h5 className="card__description">{product.description}</h5>
        <div className="card__cta">
          <p className="card__price">${product.price}</p>
          <Link to={`/item/${product.id}`}>
            <button className="card__btn btn">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
