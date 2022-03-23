import * as React from 'react';
import { Link, useLocation } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { color, fontFamily } from '@mui/system';


const styles = {
    navStyle: {
        backgroundColor: '#2a4747',
        boxShadow: 'none'
    },
    links: {
        textDecoration: 'none',
        lineHeight: '1',
        color: 'whitesmoke',
        fontFamily: 'Prata'
    },
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
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar style={styles.navStyle} position="static">
                    
                        <Container maxWidth="xl">
                            <Toolbar disableGutters style={{display:"flex", justifyContent:"space-between"}}>
                                <div>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                    >
                                        <h4>Lyss Garcia</h4>
                                    </Typography>
                                    </div>
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
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center"><Link style={styles.links} to="/">Home</Link></Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center"><Link style={styles.links} to="/About">About</Link></Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center"><Link style={styles.links} to="/Skills">Skills</Link></Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center"><Link style={styles.links} to="/Work">Work</Link></Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center"><Link style={styles.links} to="/Contact">Contact</Link></Typography>
                                            </MenuItem>

                                        </Menu>
                                    </Box>
                                    </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                    >
                                        LYSS GARCIA
                                    </Typography>
                                    </div>
                                <div>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <Link style={styles.links} to="/">Home</Link>
                                        </Button>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <Link style={styles.links} to="/About">About</Link>
                                        </Button>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <Link style={styles.links} to="/Skills">Skills</Link>
                                        </Button>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <Link style={styles.links} to="/Work">Work</Link>
                                        </Button>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <Link style={styles.links} to="/Contact">Contact</Link>
                                        </Button>

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


{/* // <header>
            //     <nav style={styles.navStyle}>
            //         <div className="nav-wrapper">
            //             <h6 className="brand-logo center">Hi, I'm Lyss</h6>
            //             <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            //             <ul className="right hide-on-med-and-down">
            //                 <li><Link to="/">Home</Link></li>
            //                 <li><Link to="/About">About</Link></li>
            //                 <li><Link to="/Skills">Skills</Link></li>
            //                 <li><Link to="/Work">Work</Link></li>
            //                 <li><Link to="/Contact">Contact</Link></li>
            //             </ul>
            //         </div>
            //     </nav>

            //     <ul className="sidenav" id="mobile-demo">
            //         <li><Link to="/">Home</Link></li>
            //         <li><Link to="/About">About</Link></li>
            //         <li><Link to="/Skills">Skills</Link></li>
            //         <li><Link to="/Work">Work</Link></li>
            //         <li><Link to="/Contact">Contact</Link></li>
            //     </ul>
            // </header> */}