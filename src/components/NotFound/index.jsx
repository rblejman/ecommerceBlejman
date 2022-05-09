import { Link } from "react-router-dom";
import "./styles.css";
export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Lo sentimos la ruta no existe</h1>
      <Link to="/">
        <button className="btn">Volver a home</button>
      </Link>
    </div>
  );
};
