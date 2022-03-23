import React from 'react'
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors'
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    borderRadius: 6,
  },
  container: {
    margin: '10px',
    maxWidth: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
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
  color: theme.palette.getContrastText(teal[900]),
  backgroundColor: '#2a4747',
  '&:hover': {
    backgroundColor: '#5c162e',
    borderColor: '#5c162e',
  },
}));


function Skills() {

  const styles = useStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.container}>
          <div>
            <TextInfoContent
              classes={textCardContentStyles}
              alignItems="center"
              justifyContent="center"
              overline={'LYSS GOT SKILLS'}
              heading={'Some technologies and languages I work with...'}
              body={
                'React, HTML, CSS, Javascript, MySQL and NoSQL, GraphQL, MongoDB, MERN, REST, APIs, Node.js, Github, VSCode, Tes-Driven Development, OOP, Figma and more...'
              }
            />
            <div className={styles.buttonGroup}>
              <Stack>
                <ColorButton size="medium" variant="contained" href="https://docs.google.com/document/d/e/2PACX-1vSb17lbX4SFM8RdUYITGV4AhPnjkwHSM12LbVcuEK4tTrQ0f9_rl5rhuZR6ofi-hg/pub">Resume</ColorButton>
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