import * as React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const styles = {
    navStyle: {
        backgroundColor: '#2a4747',
        boxShadow: 'none',
        zIndex: '1',
        alignItems: 'right',
        display: 'flex',
        justifyContent: 'right'
    },
    root: {
        alignItems: 'right',
        display: 'flex',
        justifyContent: 'right'
    },
    links: {
        textDecoration: 'none',
        lineHeight: '1',
        color: '#b4a6ab',
        fontFamily: 'Prata'
    },
    dropdownLinks: {
        textDecoration: 'none',
        lineHeight: '1',
        color: '#5c162e',
        fontFamily: 'Prata'
    },
    sideNav: {
        position: 'fixed',
        marginBottom: 0,
    }
}

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2a4747',
        },
        secondary: {
            main: '#2a4747',
        },
        error: {
            main: '#5c162e',
        },
    },
}
)

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar style={styles.navStyle} position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters >
                            <div>
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        <MenuItem sx={{ color: 'white', display: 'block' }}>
                                            <Link onClick={handleCloseNavMenu} style={styles.links} to="/">Home</Link>
                                        </MenuItem>

                                        <MenuItem sx={{ color: 'white', display: 'block' }}>
                                            <Link onClick={handleCloseNavMenu} style={styles.links} to="/Skills">Skills</Link>
                                        </MenuItem>

                                        <MenuItem sx={{ color: 'white', display: 'block' }}>
                                            <Link onClick={handleCloseNavMenu} style={styles.links} to="/Work">Work</Link>
                                        </MenuItem>

                                        <MenuItem sx={{ color: 'white', display: 'block' }}>
                                            <Link onClick={handleCloseNavMenu} style={styles.links} to="/Contact">Contact</Link>
                                        </MenuItem>

                                    </Menu>
                                </Box>
            
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link onClick={handleCloseNavMenu} style={styles.links} to="/">Home</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link onClick={handleCloseNavMenu} style={styles.links} to="/Skills">Skills</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link onClick={handleCloseNavMenu} style={styles.links} to="/Work">Work</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link onClick={handleCloseNavMenu} style={styles.links} to="/Contact">Contact</Link>
                                            </Button>
                                        </NavItem>
                                    </NavMenu>
                                </Box>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}


export default Navigation;
