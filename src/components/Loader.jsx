import React from 'react';
import { Box, Stack } from '@mui/material';
import { PacmanLoader } from "react-spinners";
const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='60vh' >
      <PacmanLoader color="#000" />
    </Stack>
  </Box>
);

export default Loader;