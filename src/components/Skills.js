import React from 'react'
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';

const transition = { duration: 1.6, ease: [0.08, 0.09, -0.1, 2] };

const useStyles = makeStyles(() => ({

  container: {
    margin: '10px',
    maxWidth: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Prata'
  },
  buttonGroup: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  margin: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  backgroundColor: '#1CFEBA',
  '&:hover': {
    backgroundColor: '#5c162e',
    borderColor: '#5c162e',
    scale: '1.1',
    color: 'white'
  },
}));


function Skills() {

  const styles = useStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, ...transition },
        }}
      >
        <div className={styles.container}>
          <div>
            <TextInfoContent
              classes={textCardContentStyles}
              fontFamily="Prata"
              alignItems="center"
              justifyContent="center"
              overline={'LYSS GOT SKILLS'}
              heading={'Some technologies and languages I work with...'}
              body={
                'React, HTML, CSS, Javascript, MySQL and NoSQL, GraphQL, MongoDB, MERN, REST, APIs, Node.js, Github, VSCode, Test-Driven Development, OOP, Figma and more...'
              }
            />
            <div className={styles.buttonGroup}>
              <Stack>
                <ColorButton size="medium" variant="contained" href="https://docs.google.com/document/d/e/2PACX-1vSb17lbX4SFM8RdUYITGV4AhPnjkwHSM12LbVcuEK4tTrQ0f9_rl5rhuZR6ofi-hg/pub">Resume</ColorButton>
                <br />
                <ColorButton size="medium" variant="contained" href="https://www.linkedin.com/in/lyss-garcia-6a480a155/">LinkedIn</ColorButton>
              </Stack>
            </div>
          </div>
        </div>
      </motion.div >
    </>
  );
}

export default Skills;