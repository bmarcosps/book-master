import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Routes from './Routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey[300],
      minHeight: '100vh',
      boxShadow: theme.shadows[6],
      paddingTop: '50px'
    },
  }),
);


function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Routes/>
    </Container>
  );
}

export default App;
