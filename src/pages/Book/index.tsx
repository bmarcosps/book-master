import { Button, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import books from '../../data/books';

interface ParamTypes {
  id: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
      width:"100%"
    }
  })
);


const Book = () => {
  const { id } = useParams<ParamTypes>();
  const book = books.find(b => b.id === Number(id));
  const classes = useStyles();

  if(book) {
    return (
        <div className={classes.root} >
          <Header path={[book.title]}/>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <img className={classes.image} src={book.cover} alt="Teste"/>
            </Grid>
            <Grid className="book-text" item xs={8}>
              
                <strong>Título</strong><p>{book.title}</p>
                <strong>Autor</strong><p>{book.authors.map(a => a + "; ")}</p>
                <strong>Idioma</strong><p>{book.idiom}</p>

                <strong>Resumo</strong><p>{book.summary}</p>
                <strong>Páginas</strong><p>{book.pages}</p>

                <strong>Palavras-chave</strong><p>{book.keywords.map(a => a + "; ")}</p>
              
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" >Reservar</Button>
              <Button variant="contained" color="secondary">Devolver</Button>
            </Grid>
            
          </Grid>
        </div>
      );
  } else {
    return (
    <div>
      <h3>
        No match for <code>{id}</code>
      </h3>
    </div>
    );
  }
}

export default Book;
