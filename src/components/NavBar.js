import React from "react";
import "./NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      <ShoppingCartIcon />
    </header>
  );
};
export default NavBar;
