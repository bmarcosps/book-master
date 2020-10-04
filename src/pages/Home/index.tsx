import React, { useState } from 'react';

import BookCard from '../../components/BookCard';
import books from '../../data/books';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';

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
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CustomBreadcrumbs/>
      <Typography color='primary' variant="h3" >BookMaster</Typography>
      <Typography color='textPrimary' variant="h5" gutterBottom>Sua biblioteca de livros online</Typography>
      <Typography color='textPrimary' variant="body1" gutterBottom> Clique nos exemplares disponíveis abaixo para ver mais informações!</Typography>
      <div className={classes.booksList}>
        {books.map(book => <BookCard {...book}/>)}
            
      </div>
    </div>

  );
}

export default Home;
