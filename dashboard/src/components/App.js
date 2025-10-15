// dashboard/src/components/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "../routes/RequireAuth"; // ✅ lives in src/routes/RequireAuth.js
import Dashboard from "./Dashboard";             // ✅ lives in the SAME folder as App.js

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


