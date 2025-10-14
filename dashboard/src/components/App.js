// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RequireAuth from "../Rou/RequireAuth";
// import Dashboard from "./Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Protect the entire dashboard subtree */}
//         <Route
//           path="/*"
//           element={
//             <RequireAuth>
//               <Dashboard />
//             </RequireAuth>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from "react";

const Apps = () => {
  return <h1>Apps</h1>;
};

export default Apps;