import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SuperviserIcon from "@material-ui/icons/SupervisorAccount";
import { Notifications } from "@material-ui/icons";
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
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SuperviserIcon} title="My Network" />
        <HeaderOption Icon={Notifications} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Messaging" />
        <HeaderOption
          avatar="https://avatars.githubusercontent.com/u/36282653?s=460&u=0c740afe13d64bc087991ecc513e72ca2ff213c2&v=4"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
