import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core'
// import { Link } from "react-router-dom";
// import Logo from '../Images/Logo.png';
// import {FaSearch} from 'react-icons/fa';
// import '../Styles/Navbar.css';

const Navbar = () => {

  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h4'> WeCare </Typography>
        <ListItem>
          <ListItemButton>
            <ListItemText primary='login'>
              Sign In
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
