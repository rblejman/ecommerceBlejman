import { NavLink, Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <>
      <img
        src="https://c.tenor.com/xEobCfdzdD4AAAAd/vincent-vega-john-travolta.gif"
        alt="error 404 page not found"
      />
      <h1>Lo sentimos la ruta no existe</h1>
      <Link to="/">
        <button>Volver a home</button>
      </Link>
    </>
  );
};
