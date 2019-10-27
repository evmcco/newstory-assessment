import React from "react";
import "./stylesheets/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <span className="latest">
          <a href="/">Latest</a>
        </span>
        <span href="/search" className="search">
          <a href="/search">Search</a>
        </span>
      </div>
    </>
  );
}

export default Header;
