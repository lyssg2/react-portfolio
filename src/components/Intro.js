import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';



const styles = {
    name: {
        margin: 'auto',
        fontSize: '50px'
    },
    helloImg: {
        margin: 'auto',
        maxHeight: '500px',
        maxWidth: '450px',
        borderRadius: '250px',
        border: '2px solid #1CFEBA',
    },
    subtitle: {
        fontStyle: 'italic',
        color: '#1CFEBA'
    },
    msgStyle: {
        margin: 'auto',
    },
    content: {
        padding: '10px'
    }
}

export default function Intro() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Box style={styles.content} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} alignItems="center" textAlign={'center'} justifyContent={'center'}>
                        <Grid item xs="8" md={5}>

                            <h1 style={styles.name}>Lyss Garcia</h1>
                            <h3 style={styles.subtitle}>Just a dev girl in a dev world.</h3>
                            <br />
                            <h2 style={styles.msgStyle}>I'm a full-stack Web Developer who loves designing and building beautifully seamless applications. Specializing in tuning a design-eye to align with the desired aesthetics and creating exciting user-oriented experiences. Let's develop something cool together.</h2>

                        </Grid>
                        <Grid item xs="8" md={5}>

                            <img style={styles.helloImg} src={require("../assets/images/cartoonself.jpg")} alt="Lyss Garcia, Web Developer"></img>

                        </Grid>
                    </Grid>
                </Box>
            </motion.div >
        </>
    );
}

