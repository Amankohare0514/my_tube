import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import LoginButton from "../AuthProcess/LoginButton";
import Profile from "../AuthProcess/Profile";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const userIsAuthenticated = true; 
      setIsAuthenticated(userIsAuthenticated);
    };

    checkAuthentication();
  }, []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: 'rgba(0, 0, 0, 0.2)',
        top: 0,
        justifyContent: "space-between",
        backdropFilter: 'blur(10px)',
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      {isAuthenticated ? (
        <Profile />
      ) : (
        <LoginButton />
      )}
    </Stack>
  );
};

export default Navbar;
