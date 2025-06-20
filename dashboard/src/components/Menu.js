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
  const activeMenuClass = "menu selected";

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
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => hanldeMenuClick(0)}
              >
                <p className={isMenuOpen === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => hanldeMenuClick(1)}
              >
                <p className={isMenuOpen === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => hanldeMenuClick(2)}
              >
                <p className={isMenuOpen === 2 ? activeMenuClass : menuClass}>
                  {" "}
                  Holdings
                </p>
              </Link>{" "}
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => hanldeMenuClick(3)}
              >
                <p className={isMenuOpen === 3 ? activeMenuClass : menuClass}>
                  {" "}
                  Positions
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => hanldeMenuClick(4)}
              >
                <p className={isMenuOpen === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>{" "}
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/apps"
                onClick={() => hanldeMenuClick(5)}
              >
                <p className={isMenuOpen === 5 ? activeMenuClass : menuClass}>
                  {" "}
                  Apps
                </p>
              </Link>{" "}
            </li>
          </ul>
          <hr />
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
