import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul>
            <li>
              <Link className="header__nav-link" to="/">
                Todo Page
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/assignment">
                Assignment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
