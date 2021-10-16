import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { logOutFunction } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutFunction(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <button className="logOut" onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
