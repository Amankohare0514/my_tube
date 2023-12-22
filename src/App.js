import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "./components/ThemeContext";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";
import { useTheme } from "./components/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const { darkMode } = useTheme();

  return (
    <Box sx={{ background: darkMode ? "#fff" : "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
