import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import ListItemIcon from '@mui/material/ListItemIcon';

const styles = {
    logoStyles: {
        height: "50px",
        width: "50px",
        marginTop: 20,
        marginBottom: 0,
    }
}

function Footer() {
    return (
        <footer>
            <Box>

                <Toolbar />
                <List>
                    <SocialProvider useStyles={useMoonSocialLinkStyles}>
                        <ListItemIcon><SocialLink brand={'GithubCircle'} href={'https://github.com/lyssg2'} /></ListItemIcon>
                        <ListItemIcon><SocialLink brand={'Instagram'} href={'https://www.instagram.com/lyssgram/'} /></ListItemIcon>
                        <ListItemIcon><SocialLink brand={'LinkedIn'} href={'hhttps://www.linkedin.com/in/lyss-garcia-6a480a155/'} /></ListItemIcon>
                    </SocialProvider>
                </List>

            </Box>
        </footer>

    );
}

export default Footer;