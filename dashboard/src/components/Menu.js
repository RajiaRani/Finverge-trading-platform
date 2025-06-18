import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const hanldeMenuClick = (index) => {
    setIsMenuOpen(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activemenuClass = "menu selected";

  return (
    <>
      <div className="menu-container d-flex">
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="menus">
          <ul className="d-flex" style={{ listStyle: "none" }}>
            <li>
              <Link to="/" onClick={() => hanldeMenuClick(0)}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/orders" onClick={() => hanldeMenuClick(1)}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/holdings" onClick={() => hanldeMenuClick(2)}>
                Holdings
              </Link>{" "}
            </li>
            <li> 
                <Link to="/positions" onClick={() => hanldeMenuClick(3)}>
                Positions
                </Link>
            </li>
            <li>
                <Link to="/funds" onClick={() => hanldeMenuClick(4)}>
                Funds
                </Link> </li>
            <li>
                <Link to="/apps" onClick={() => hanldeMenuClick(5)}>
                Apps
                </Link> </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
