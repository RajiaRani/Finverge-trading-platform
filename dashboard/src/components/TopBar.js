import React from "react";
import Menu from "./Menu";
function TopBar() {
  return (
    <>
      <div className="topbar-container d-flex mt-1">
        <div className="indices-container d-flex col-3 border p-2 ">
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

      <div className="col-9 border p-2"> 
      <Menu/>
      </div>
      </div>
    </>
  );
}

export default TopBar;
