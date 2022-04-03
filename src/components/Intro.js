import React from "react";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { motion } from "framer-motion";

const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }

const letterTransition = { duration: 1.4, ease: [0.08, 0.01, -0.05, 2] };

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
                            <motion.div
                            whileHover={{
                                scale: 1.01,
                                textShadow: "0px 0px 2px #1CFEBA"
                            }}
                                className='single'
                                initial='initial'
                                animate='animate'
                                exit='exit'>
                                <motion.div
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.9, ...letterTransition }
                                }}>
                                    <motion.span className="first" >
                                        <motion.span style={styles.name}>Lyss Garcia</motion.span>
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6, ...letterTransition },
                                }}>
                                <h3 style={styles.subtitle}>Just a dev girl in a dev world</h3>
                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6, ...letterTransition },
                                }}>
                                <h2 style={styles.msgStyle}>I'm a full-stack Web Developer who loves designing and building beautifully seamless applications. Specializing in tuning a design-eye to align with the desired aesthetics and creating exciting user-oriented experiences. Let's develop something cool together.</h2>
                            </motion.div>
                        </Grid>
                        <Grid item xs="8" md={5}>
                            <motion.img
                                src={require("../assets/images/cartoonself.jpg")}
                                whileHover={{ scale: 1.03 }}
                                transition={transition}
                                style={styles.helloImg}
                                alt="Lyss Garcia, Web Developer">
                            </motion.img>
                        </Grid>
                    </Grid>
                </Box>
            </motion.div >
        </>
    );
}

