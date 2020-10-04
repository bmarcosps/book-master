import { createStyles, makeStyles, Theme } from '@material-ui/core';
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
  })
);


const Book = () => {
  const { id } = useParams<ParamTypes>();
  const book = books[Number(id)];
  const classes = useStyles();
  return (
    <div className={classes.root} >
        <Header path={[book.title]}/>
        <main className="book-info">
            <img src={book.cover} alt="Teste"/>
            <div className="book-text">
                <strong>Título</strong><p>{book.title}</p>
                <strong>Autor</strong><p>{book.authors.map(a => a + "; ")}</p>
                <strong>Idioma</strong><p>{book.idiom}</p>

                <strong>Resumo</strong><p>{book.summary}</p>
                <strong>Páginas</strong><p>{book.pages}</p>

                <strong>Palavras-chave</strong><p>{book.keywords.map(a => a + "; ")}</p>
            
        
            </div>
            
        </main>
      </div>
  );
}

export default Book;
