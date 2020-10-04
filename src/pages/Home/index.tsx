import React, { useState } from 'react';

import BookCard from '../../components/BookCard';
import books from '../../data/books';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';

import logo from '../../assets/images/logo.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    booksList: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    logo: {
      padding: theme.spacing(2),
      width: '100%',
      maxWidth: '500px'
    },

  }),
);

const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CustomBreadcrumbs/>
      <img src={logo} className={classes.logo} alt="logo"/>

      <div className={classes.booksList}>
        {books.map(book => <BookCard {...book}/>)}
            
      </div>
    </div>

  );
}

export default Home;
