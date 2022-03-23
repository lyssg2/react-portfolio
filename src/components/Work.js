import React from 'react'
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';


const useStyles = makeStyles(() => ({
    card: {
        width: 400,
        position: 'relative',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        borderRadius: '1.5rem',
        fontFamily: 'Prata',
        transition: '0.4s',
        '&:hover': {
            transform: 'translateY(-2px)',
            '& $shadow': {
                bottom: '-1.5rem',
            },
            '& $shadow2': {
                bottom: '-2.5rem',
            },
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: 0,
            display: 'block',
            width: '100%',
            bottom: -1,
            height: '100%',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.08)',
        },
    },
    main: {
        overflow: 'hidden',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
        zIndex: 1,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            display: 'block',
            width: '100%',
            height: '100%',
        },
    },
    content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1,
        padding: '1.5rem 1.5rem 1rem',
    },
    avatar: {
        width: 48,
        height: 48,
    },
    tag: {
        display: 'inline-block',
        fontFamily: 'Prata',
        backgroundColor: '#ff5dac',
        borderRadius: '0.5rem',
        padding: '2px 0.5rem',
        color: '#fff',
        marginBottom: '0.5rem',
    },
    title: {
        fontFamily: 'Prata',
        fontSize: '2rem',
        color: '#fff',
    },
    info: {
        fontFamily: 'Spartan',
    },
    author: {
        zIndex: 1,
        position: 'relative',
        borderBottomLeftRadius: '1.5rem',
        borderBottomRightRadius: '1.5rem',
    },
    shadow: {
        transition: '0.2s',
        position: 'absolute',
        zIndex: 0,
        width: '88%',
        height: '100%',
        bottom: 0,
        borderRadius: '1.5rem',
        backgroundColor: 'rgba(0,0,0,0.06)',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    shadow2: {
        bottom: 0,
        width: '72%',
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    margin: '5px',
    color: theme.palette.getContrastText(teal[900]),
    borderColor: teal[900],
    backgroundColor: teal[900],
    '&:hover': {
      backgroundColor: teal[100],
      borderColor: teal[100],
    },
  }));

const Work = () => {
    const styles = useStyles();
    const mediaStyles = useCoverCardMediaStyles();

    return (

        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <div className="row center-align">
                        <h3>Projects</h3>

                        <Grid container 
                            spacing={4}
                            alignItems="center"
                            justifyContent="center"
                            >
                            <Grid item>
                                <Card className={styles.card}>
                                    <Box className={styles.main} minHeight={300} position={'relative'}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                'https://uploads.visitseattle.org/2017/02/30115610/IMG_1491.jpg'
                                            }
                                        />
                                        <div className={styles.content}>
                                            <Typography variant={'h2'} className={styles.title}>
                                                Total Quest
                                            </Typography>
                                        </div>
                                    </Box>
                                    <Row
                                        className={styles.author}
                                        m={0}
                                        p={3}
                                        pt={2}
                                        gap={2}
                                        bgcolor={'common.white'}
                                    >
                                        <Info position={'middle'} useStyles={useNewsInfoStyles}>
                                            <InfoTitle className={styles.info}>An online real-world scavenger hunt application where contestants solve clues to find locations, then scan QR codes to earn points and log their victories.</InfoTitle>
                                            <br />
                                            <ColorButton variant="contained" href="https://www.totalquest.us/">Live</ColorButton>
                                            <ColorButton variant="contained" href="https://github.com/mjamesd/urban-giggle">Repo</ColorButton>
                                        </Info>
                                    </Row>
                                    <div className={styles.shadow} />
                                    <div className={`${styles.shadow} ${styles.shadow2}`} />
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={styles.card}>
                                    <Box className={styles.main} minHeight={300} position={'relative'}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                require("../assets/images/coffeebackground.jpg")
                                            }
                                        />
                                        <div className={styles.content}>
                                            <Typography variant={'h2'} className={styles.title}>
                                                extracted.
                                            </Typography>
                                        </div>
                                    </Box>
                                    <Row
                                        className={styles.author}
                                        m={0}
                                        p={3}
                                        pt={2}
                                        gap={2}
                                        bgcolor={'common.white'}
                                    >
                                        <Info position={'middle'} useStyles={useNewsInfoStyles}>
                                            <InfoTitle className={styles.info}>A website connecting the coffee lover to the best coffee shops in the PNW.</InfoTitle>
                                            <br />
                                            <ColorButton variant="contained" href="https://extracted-coffee.herokuapp.com/">Live</ColorButton>
                                            <ColorButton variant="contained" href="https://github.com/lyssg2/extracted">Repo</ColorButton>
                                        </Info>
                                    </Row>
                                    <div className={styles.shadow} />
                                    <div className={`${styles.shadow} ${styles.shadow2}`} />
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={styles.card}>
                                    <Box className={styles.main} minHeight={300} position={'relative'}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                require("../assets/images/cocktail-head.png")
                                            }
                                        />
                                        <div className={styles.content}>
                                            <Typography variant={'h2'} className={styles.title}>
                                                Cocktail Hour
                                            </Typography>
                                        </div>
                                    </Box>
                                    <Row
                                        className={styles.author}
                                        m={0}
                                        p={3}
                                        pt={2}
                                        gap={2}
                                        bgcolor={'common.white'}
                                    >
                                        <Info position={'middle'} useStyles={useNewsInfoStyles}>
                                            <InfoTitle className={styles.info}>Helping the fellow beverage lover and newbie mixer alike find cocktail recipes in a pinch.</InfoTitle>
                                            <br />
                                            <ColorButton variant="contained" href="https://lyssg2.github.io/cocktail-hour/">Live</ColorButton>
                                            <ColorButton variant="contained" href="https://github.com/lyssg2/cocktail-hour">Repo</ColorButton>
                                        </Info>
                                    </Row>
                                    <div className={styles.shadow} />
                                    <div className={`${styles.shadow} ${styles.shadow2}`} />
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={styles.card}>
                                    <Box className={styles.main} minHeight={300} position={'relative'}>
                                        <CardMedia
                                            classes={mediaStyles}
                                            image={
                                                require("../assets/images/text-editor.jpg.png")
                                            }
                                        />
                                        <div className={styles.content}>
                                            <Typography variant={'h2'} className={styles.title}>
                                                Text Editor
                                            </Typography>
                                        </div>
                                    </Box>
                                    <Row
                                        className={styles.author}
                                        m={0}
                                        p={3}
                                        pt={2}
                                        gap={2}
                                        bgcolor={'common.white'}
                                    >
                                        <Info position={'middle'} useStyles={useNewsInfoStyles}>
                                            <InfoTitle className={styles.info}>Write code anywhere. Online or offline!</InfoTitle>
                                            <br />
                                            <ColorButton variant="contained" href="https://nameless-bayou-34119.herokuapp.com/">Live</ColorButton>
                                            <ColorButton variant="contained" href="https://github.com/lyssg2/text-editor">Repo</ColorButton>
                                        </Info>
                                    </Row>
                                    <div className={styles.shadow} />
                                    <div className={`${styles.shadow} ${styles.shadow2}`} />
                                </Card>
                            </Grid>
                        </Grid>

                    </div>
                </div>
            </motion.div >
        </>
    )
}

export default Work;