import React from 'React';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";


const NavbarAlt = () => {
    // list out nav items 
const navbarAltItems = ['Help', 'Sign In']
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component='nav'
                style={{
                    backgroundColor: "#21b6ae",
                    padding: "0.1rem 0.4rem",
                    fontSize: "1.2rem",
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        style={{ fontWeight: "bold" }}
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        WeCare
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavbarAlt;