import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>I am a sidebar</h1>
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar />
        <h2>Mouhamadou Diouf</h2>
        <h4>mouhamadoudioufsn@gmail.com</h4>
      </div>
    </div>
  );
}

export default Sidebar;
