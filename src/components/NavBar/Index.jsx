import React, { useState } from "react";
import "./styles.css";
import CartWidget from "../CartWidget/Index";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/light-logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const categories = [
  { name: "Techo", route: "/categories/techo", id: 1 },
  { name: "Pared", route: "/categories/pared", id: 2 },
  { name: "Mesa", route: "/categories/mesa", id: 3 },
  { name: "Piso", route: "/categories/piso", id: 4 },
];

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Lumen Company Logo" className="logo" />
        </Link>

        <ul className={clicked ? "navbar__menu active" : "navbar__menu"}>
          {categories.map((element) => {
            return (
              <li>
                <Link to={element.route} key={element.id}>
                  {element.name}
                </Link>
              </li>
            );
          })}
          <Link to="/cart" className="navbar__widget">
            <CartWidget />
          </Link>
        </ul>

        {clicked ? (
          <div onClick={handleClick} className="navbar__icon">
            <ClearRoundedIcon />
          </div>
        ) : (
          <div onClick={handleClick} className="navbar__icon">
            <MenuRoundedIcon />
          </div>
        )}
      </nav>
    </header>
  );
};
export default NavBar;
