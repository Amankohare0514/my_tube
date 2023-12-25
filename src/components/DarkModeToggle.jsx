import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const iconStyle = {
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "10px",
  };
  return (
    <div style={iconStyle} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <span role="img" aria-label="Light Mode">
          <LightModeIcon />
        </span>
      ) : (
        <span role="img" aria-label="Dark Mode">
          <DarkModeIcon />
        </span>
      )}
    </div>
  );
};

export default DarkModeToggle;
