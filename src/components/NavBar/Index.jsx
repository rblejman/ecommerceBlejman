import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/Index";
import { NavLink, Link } from "react-router-dom";

const categories = [
  { name: "Techo", route: "/categories/techo", id: 1 },
  { name: "Pared", route: "/categories/pared", id: 2 },
  { name: "Mesa", route: "/categories/mesa", id: 3 },
  { name: "Piso", route: "/categories/piso", id: 4 },
];

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Brand</h1>
      </Link>

      <nav>
        {categories.map((element) => {
          return (
            <Link to={element.route} key={element.id}>
              {element.name}
            </Link>
          );
        })}
      </nav>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
export default NavBar;
