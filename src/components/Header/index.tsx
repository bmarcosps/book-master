import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
        position: 'fixed',
        top:0,
        left: 0,
        width: '100vw',
        maxWidth: '100vw',
        backgroundColor: theme.palette.primary.main,
        overflow: 'hidden',
        zIndex:1
    },
    headerLinks: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 20 0 20',
        listStyle: 'none',
        color: theme.palette.primary.contrastText
    },
    headerLink: {
        textAlign: 'center',
        textDecoration: 'none',
        color: theme.palette.primary.contrastText
  
    }
    
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerContainer} >
    
        <ul className={classes.headerLinks}>
            <li><Link className={classes.headerLink} to='/'>BookMaster</Link></li>
        </ul>
        
    </header>
  );
}

export default Header;
