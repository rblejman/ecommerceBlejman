import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <h5>{product.description}</h5>
      <p>{product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

// hacer destructuring props
