import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <div className="nav-bar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="navbar-logo">SUZUKI</h1>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        {clicked ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="/login">
            <button>Sign up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
