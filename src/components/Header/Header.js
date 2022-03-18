import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <h1>Rio</h1>
        <nav>
          <ul className="nav-bar">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
          </ul>
        </nav>

      </header>
    </div>
  );
};

export default Header;
