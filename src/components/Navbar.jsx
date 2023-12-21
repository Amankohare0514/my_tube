import React, { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: darkMode ? "#fff" : "#000",
        color: darkMode ? "#000" : "#fff", // Text color is inverted
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <IconButton onClick={toggleDarkMode} color="inherit">
        {darkMode ? <LightModeIcon color="black" /> : <DarkModeIcon />}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
