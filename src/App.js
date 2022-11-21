import React from 'react';
import TopBar from './TopBar';
import { Box } from '@mui/material';
import PageContent from './PageContent';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <PageContent />
    </Box>
  )
}

export default App