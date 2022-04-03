import * as React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import ListItemIcon from '@mui/material/ListItemIcon';
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar style={styles.navStyle} position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters >
                            <div>
                                <Box sx={{ flexGrow: 1 }}>
                                    <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/">Home</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/Skills">Skills</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >
                                                <Link style={styles.links} to="/Work">Work</Link>
                                            </Button>
                                        </NavItem>

                                        <NavItem>
                                            <Button
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
