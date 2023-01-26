import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from 'react'

import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import userService from '../services/user.service';

export default function ButtonAppBar() {
    const navigate=useNavigate();
    let islogged=authService.islogged();
  
    
    
    const logoutHandler=()=>{
      authService.logout();
      navigate("/login");
      
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Banking app
          </Typography>
          {islogged && (<><span style={{'paddingRight':'30px'}}> </span> <Button variant="contained" style={{'backgroundColor':'black'}} onClick={logoutHandler}>Logout </Button> </>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
