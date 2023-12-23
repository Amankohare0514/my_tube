import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from "./components";

const App = () => (
  <BrowserRouter>
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #2d06f2, #fb173f)',    
      }}
    >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
