import React from "react";
import "./stylesheets/Header.css";

function Header() {
  return (
    <div className="header-border">
      <div className="header">
        <span className="latest">
          <a href="/">Latest</a>
        </span>
        <span className="search">
          <a href="/search">Search</a>
        </span>
      </div>
    </div>
  );
}

export default Header;
