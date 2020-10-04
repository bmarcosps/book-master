import { Button, createStyles, Grid, makeStyles,  Modal,  Theme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React, { useState } from 'react';
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
  const taken = true;
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  if(book) {
    return (
        <div className={classes.root} >
          <Header path={[book.title]}/>

          <Grid container spacing={3} >
            <Grid item xs={12} sm={4}>
              <img className={classes.image} src={book.cover} alt="Teste"/>
            </Grid>
            <Grid className="book-text" item xs={12} sm={8}>
              
                <strong>Título</strong><p>{book.title}</p>
                <strong>Autor</strong><p>{book.authors.map(a => a + "; ")}</p>
                <strong>Idioma</strong><p>{book.idiom}</p>

                <strong>Resumo</strong><p>{book.summary}</p>
                <strong>Páginas</strong><p>{book.pages}</p>

                <strong>Palavras-chave</strong><p>{book.keywords.map(a => a + "; ")}</p>
              
            </Grid>
            <Grid container spacing={3} 
              direction="row"
              justify="center"
              alignItems="center">
                {taken?
                <div>
                  <Button variant="contained" color="secondary" onClick={handleOpen}>Devolver</Button>
                  <Dialog open={open} onClose={handleClose} 
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  >

                  <DialogTitle id="alert-dialog-title">Devolver livro: {book.title} ?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                     Você quer mesmo devolver o livro?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                      Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Confirmar
                    </Button>
                  </DialogActions>
                </Dialog>
                </div>
                
                
                :
                <div>
                <Button variant="contained" color="primary" onClick={handleOpen}>Reservar</Button>
                <Dialog open={open} onClose={handleClose} 
                aria-labelledby="form-dialog-title">

                  <DialogTitle id="form-dialog-title">Reservar livro: {book.title}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                     Para reservar um livro você deve informar seu nome e confirmar.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Nome completo"
                      type="text"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                      Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Confirmar
                    </Button>
                  </DialogActions>
                </Dialog>
                </div>
                }
            </Grid>
            
            
          </Grid>
        </div>
      );
  } else {
    return (
    <div>
      <h3>
        A página <code>{id}</code> não foi encontrada.
      </h3>
    </div>
    );
  }
}

export default Book;
