import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import NewFolder from "../AuthProcess/BothFolder";
import DarkModeToggle from "./DarkModeToggle"; // Create DarkModeToggle component
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const navbarStyle = {
    position: "sticky",
    background: isDarkMode ? "#fff" : "rgba(0, 0, 0, 0.2)",
    top: 0,
    justifyContent: "space-between",
    backdropFilter: "blur(10px)",
    padding: "10px", 
  };
  const logoStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "auto", 
  };
  const centerContentStyle = {
    flex: 1, 
    display: "flex",
    justifyContent: "center",
  };
  const rightContentStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto", 
  };
  return (
    <Stack direction="row" alignItems="center" sx={navbarStyle}>
      <div style={logoStyle}>
        <Link to="/">
          <img src={logo} alt="logo" height={40} />
        </Link>
      </div>
      <div style={centerContentStyle}>
        <SearchBar />
      </div>
      <div style={rightContentStyle}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <NewFolder />
      </div>
    </Stack>
  );
};

export default Navbar;
