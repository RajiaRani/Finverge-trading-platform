import React from "react";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";
import Holdings from "./Holdings";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<App />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
}

export default Dashboard;
