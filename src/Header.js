import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="linkedIn logo"
        />
        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
