import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* SIDEBAR TOP */}
      <div className="sidebar__top">
        <img
          src="https://t4.ftcdn.net/jpg/05/12/64/51/360_F_512645152_VJUHBFUzLXp0qApk5qf08m6CNmb49c3O.webp"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Elijah Boahen</h2>
        <h4>boahen.cos@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.543</p>
        </div>
        <div className="sidebar__stat">
          <p>Vviews on post</p>
          <p className="sidebar__statNumber">2.543</p>
        </div>
      </div>

      {/* SIDEBAR BOTTOM */}
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
