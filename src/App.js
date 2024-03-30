import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./pages/global/Topbar";
import Sidebarx from "./pages/global/Sidebarx";
import Dashboard from "./pages/dashboard/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <div
        className="app"
        style={{
          display: "flex",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <Sidebarx />
        <main className="content" style={{ width: "100%" }}>
          <Topbar />
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
