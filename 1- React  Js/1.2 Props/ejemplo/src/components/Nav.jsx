import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';

const Nav = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Nav