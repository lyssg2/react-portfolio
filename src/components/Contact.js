import React from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Card from '@material-ui/core/Card';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import { teal } from '@mui/material/colors'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CardContent from '@material-ui/core/CardContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Modal from '@mui/material/Modal';



const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
  },
  media: {
    borderRadius: 6,
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#5c162e !important'
  },
}));

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5c162e',
    },
    secondary: {
      main: '#2a4747',
    },
    error: {
      main: '#934b00',
    },
  },
});

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
  '&:click': {
    backgroundColor: '#5c162e',
    borderColor: '#5c162e',
  }
}));

const Contact = () => {
  const styles = useStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  // modal states open/close
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >

        <main>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardContent>
              <TextInfoContent
                classes={textCardContentStyles}
                overline={'We Need To Talk...'}
                heading={'CONTACT ME'}
                body={
                  <Box
                    sx={{
                      display: 'flex',

                      alignItems: 'center',
                      flexDirection: 'column',
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                  >
                    <TextField  id="outlined-basic" InputProps={{ disableUnderline: true, }} variant='outlined' label="Name" />
                    <TextField id="demo-helper-text-misaligned-no-helper" variant='outlined' label="Email" />

                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="..."
                      style={{ width: 300, height: 100 }}
                    />
                    <ColorButton onClick={handleOpen} size="medium" variant="contained">Send</ColorButton>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardContent>
                          <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'THANKS FOR REACHING OUT!'}
                            body={
                              <>
                                <p>I will get back to you very soon</p>
                              </>
                            }
                          />
                        </CardContent>
                      </Card>
                    </Modal>
                  </Box>
                }
              />
            </CardContent>
          </Card>
        </main>
      </motion.div>
    </ThemeProvider>
  );
};

export default Contact