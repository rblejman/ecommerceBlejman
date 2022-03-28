import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Juegos</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};
export default NavBar;
