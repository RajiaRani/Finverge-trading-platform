import React from "react";
import Menu from "./Menu";
function TopBar() {
  return (
    <>
      <div className="topbar-container d-flex">
        <div className="indices-container">
          <div className="nifty d-flex">
            <p className="index">NIFTY 50</p>
            <p className="index-points">{100.2} </p>
            <p className="percent"> </p>
          </div>
          <div className="sensex d-flex">
            <p className="index">SENSEX</p>
            <p className="index-points">{100.2}</p>
            <p className="percent"></p>
          </div>
        </div>

  
      <Menu/>

      </div>
    </>
  );
}

export default TopBar;
