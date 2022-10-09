import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="Container">
        <nav className="Header__Nav">
          <ul>
            <li>
              <Link className="Header__Nav-Link" to="/">
                Todo Page
              </Link>
            </li>
            <li>
              <Link className="Header__Nav-Link" to="/assignment">
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
