import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data.js";
import GeneralContext from "./GeneralContext";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="saerch"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} /50 </span>
        </div>
        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  // Event handler
  // Mouse enter kiya
  const handleMouseEnter = (event) => {
    setShowWatchListActions(true);
  };

  // Mouse Exit kiye
  const handleMouseLeave = (event) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" /> // material ui icons
          ) : (
            <KeyboardArrowUp className="down" /> // material ui icons
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {/* Call the Tooltip */}
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

//watchlist actions
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        {/* ==== For Buy Button ===*/}
        <Tooltip
          title="Buy (B)"
          placement="top" // where do you want to place up/down
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        {/* ==== For Sell Button ===*/}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        {/* ====For Analytical Button ===*/}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
