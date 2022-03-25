import * as React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import ListItemIcon from '@mui/material/ListItemIcon';
import zIndex from '@mui/material/styles/zIndex';
import { lineHeight } from '@mui/system';

const drawerWidth = 60;

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
                <AppBar style={styles.navStyle} position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                    <Container maxWidth="xl">
                        <Toolbar disableGutters >
                            <div className='navLinks'>
                                <Box sx={{ flexGrow: 1, float: 'right', display: { xs: 'flex', md: 'none' } }}>
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
                                            <Typography textAlign="center"><Link style={styles.dropdownLinks} to="/">Home</Link></Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center"><Link style={styles.dropdownLinks} to="/About">About</Link></Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center"><Link style={styles.dropdownLinks} to="/Skills">Skills</Link></Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center"><Link style={styles.dropdownLinks} to="/Work">Work</Link></Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center"><Link style={styles.dropdownLinks} to="/Contact">Contact</Link></Typography>
                                        </MenuItem>

                                    </Menu>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>

                                        <NavItem>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/">Home</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/About">About</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/Skills">Skills</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/Work">Work</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/Contact">Contact</Link>
                                            </Button>
                                        </NavItem>
                                    </NavMenu>

                                </Box>
                            </div>
                        </Toolbar>
                    </Container>

                </AppBar>
                <Box>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            position: 'fixed', 
                            bottom: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: '2px',
                                lineHeight: '3',
                                color: '#b4a6ab',
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar />
                        <List>
                            <SocialProvider useStyles={useMoonSocialLinkStyles}>
                                <ListItemIcon><SocialLink brand={'GithubCircle'} href={'https://github.com/lyssg2'} /></ListItemIcon>
                                <ListItemIcon><SocialLink brand={'Instagram'} href={'https://www.instagram.com/lyssgram/'} /></ListItemIcon>
                                <ListItemIcon><SocialLink brand={'LinkedIn'} href={'hhttps://www.linkedin.com/in/lyss-garcia-6a480a155/'} /></ListItemIcon>
                            </SocialProvider>
                        </List>
                    </Drawer>
                </Box>
            </ThemeProvider>
        </>
    )
}


export default Navigation;
