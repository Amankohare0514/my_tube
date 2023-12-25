import React, { useState } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import NewFolder from "../AuthProcess/BothFolder";
import DarkModeToggle from "./DarkModeToggle"; 
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    width: "100%",
  };

  const rightContentStyle = {
    display: "flex",
    flexDirection:  "row", 
    alignItems: "flex-end", 
    marginLeft:   0,
  };

  return (
    <Stack direction="row" alignItems="center" sx={navbarStyle}>
      <div style={logoStyle}>
        <Link to="/">
          <img src={logo} alt="logo" height={40} />
        </Link>
      </div>
      {!isMobile && (
        <div style={centerContentStyle}>
          <SearchBar />
        </div>
      )}
      <div style={rightContentStyle}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <NewFolder />
      </div>
    </Stack>
  );
};

export default Navbar;
