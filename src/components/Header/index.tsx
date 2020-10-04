import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, Icon, makeStyles, Theme } from '@material-ui/core';

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
        height: '50px',
        zIndex:1
    },
    headerLinks: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        listStyle: 'none',
        color: theme.palette.primary.contrastText,
        margin: 0
    },
    headerLink: {
        textAlign: 'center',
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        padding: 10
  
    },
    headerLinkLi:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    }
    
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerContainer} >
    
        <ul className={classes.headerLinks}>
            <li className={classes.headerLinkLi}>
              <Link className={classes.headerLink} to='/'>
                 BookMaster
              </Link>
              </li>
        </ul>
        
    </header>
  );
}

export default Header;
