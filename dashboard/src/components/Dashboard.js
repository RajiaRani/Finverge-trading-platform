import React from "react";
import WatchList from "./WatchList.js";
import Summary from "./Summary.js";
import Orders from "./Orders.js";
import Positions from "./Positions.js";
import Funds from "./Funds.js";
import Holdings from "./Holdings.js";
import App from "./App.js";

import { Route, Routes } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <WatchList />
        
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Summary/>} />
                <Route  path="/orders" element={<Orders/>} />
                <Route  path="/holdings" element={<Holdings/>} />
                <Route  path="/positions" element={<Positions/>} />
                <Route  path="/funds" element={<Funds/>} />
                <Route  path="/apps" element={<App/>} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
