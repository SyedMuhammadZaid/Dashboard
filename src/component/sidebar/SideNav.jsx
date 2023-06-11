import React from "react";
import "./style.css";
import Divider from "../Divider";
import Button from "../Button";

const SideNav = () => {
  return (
    <div className="sidenav-main">
      <div className="nav-elements">
        <h1>LODGN</h1>
        <ul>
          <li>Current requests</li>
          <Divider />
          <li>Ongoing stays</li>
          <Divider />
          <li>previous stays</li>
          <Divider />
          <li>Report</li>
          <Divider />
        </ul>
      </div>
      <div className="nav-link">
        <Button value={'Log-out'}/>
      </div>
    </div>
  );
};

export default SideNav;
