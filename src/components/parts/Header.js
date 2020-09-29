import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
import jwt from "jsonwebtoken";

const Header = () => {
  const [profile, setProfile] = useState("Undefined");

  useEffect(() => {
    const token = jsCookie.get("token");
    if (!!token) {
      const tokenDecoded = jwt.decode(token);
      setProfile(`${tokenDecoded.name} (${tokenDecoded.role})`);
    }
  }, [profile]);

  const handleLogout = async () => {
    // remove token

    jsCookie.remove("token");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="bg-purple">
      <div className="header container-fluid">
        <div className="header__logo">Kanban.</div>
        <ul className="header__menu-list">
          <li className="header__menu-list__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="header__menu-list__item text-capitalize">
            <Link to="#">{profile}</Link>
          </li>
          <li className="header__menu-list__item">
            <Link onClick={handleLogout} to="#">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
