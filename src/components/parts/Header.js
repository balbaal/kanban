import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple">
      <div className="header container-fluid">
        <div className="header__logo">Kanban.</div>
        <ul className="header__menu-list">
          <li className="header__menu-list__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__menu-list__item">
            <Link to="/projects">Profile</Link>
          </li>
          <li className="header__menu-list__item">
            <Link to="/project/22">Logout</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
