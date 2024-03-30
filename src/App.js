import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebarx from "./pages/global/Sidebarx";
import Dashboard from "./pages/dashboard/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
//import ReactDOM from "react-dom";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Box>
          <Sidebarx toggled={toggled} setToggled={setToggled} />
        </Box>
        <main className="content" style={{ width: "100%" }}>
          <Topbar setToggled={setToggled} toggled={toggled} />
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
