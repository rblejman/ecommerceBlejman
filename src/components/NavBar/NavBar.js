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
            <a href="#">Techo</a>
          </li>
          <li>
            <a href="#">Pared</a>
          </li>
          <li>
            <a href="#">Mesa</a>
          </li>
          <li>
            <a href="#">Piso</a>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};
export default NavBar;
