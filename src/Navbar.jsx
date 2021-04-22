import React from "react";
import CallIcon from "@material-ui/icons/Call";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">COVID RESOURCES ALIGARH</div>
      <div className="navbar-contact">
        <div> EMERGENCY CONTACT</div>
        <div>9045xxxx</div>
      </div>
      <div className="navbar-icon">
        <CallIcon />
      </div>
    </div>
  );
}

export default Navbar;
