import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import NewFolder from "../AuthProcess/NewFolder";

const Navbar = () => {

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
    <NewFolder/>
    </Stack>
  );
};

export default Navbar;
