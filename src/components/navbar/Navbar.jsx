import React from "react";
import "./navbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">
            <Link to="/" className="theLink">adminpanal</Link>
          </span>
        </div>
        <div className="navRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <Link to="/user/:idUser">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="navAvatar" />
          </Link>
        </div>
      </div>
    </div>
  );
}