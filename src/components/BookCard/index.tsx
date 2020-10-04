import { Card, CardActionArea, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../models/Book';

import './styles.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey[300],
      minHeight: '100vh',
      boxShadow: theme.shadows[6],
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        width: 400,
        minWidth: 300,
        maxHeight: 400,
        height: 'auto',
        marginBottom: 15,
    },
    card:{
        overflow: 'hidden',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardAction: {
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bookInfo:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        padding: '1rem',
        textAlign: 'justify',
    },
    image: {
        maxWidth: '10rem',
        maxHeight: '10rem',
        padding: '0 20px 0 20px'
    },
    bookStatusAvailable: {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light,
    },
    bookStatusTaken: {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.light,
    },
    bookOwner: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  }),
);

const BookCard: React.FC<Book> = (props) => {
    const classes = useStyles();
    const isTaken = false;
    return (
        <Link className={classes.link}  to={'/' + props.id.toString()}>
        <Card className={classes.card} elevation={3}>
            <CardActionArea className={classes.cardAction}>
        
                <main className={classes.bookInfo}>
                    
                    <img className={classes.image} src={props.cover} alt="Teste"/>
                    <div className="book-text">
                        <Typography variant="body1" color="textPrimary" component="p">
                            Título
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {props.title}
                        </Typography>

                        <Typography variant="body1" color="textPrimary" component="p" >
                            Autor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {props.authors.map(a => a + "; ")}
                        </Typography>

                        <Typography variant="body1" color="textPrimary" component="p">
                        Palavras-chave
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {props.keywords.map(a => a + "; ")}
                        </Typography>
                    </div>
                    
                </main>
                {isTaken?
                    <footer className={classes.bookStatusTaken}>
                        <Typography variant="body1"  component="p" gutterBottom>
                            Livro emprestado
                        </Typography>
                        <div className={classes.bookOwner}>
                        <Typography variant="body2" component="p" gutterBottom>
                            Fulano de tal
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom>
                            04/10/2020
                        </Typography>
                        </div>
                    </footer>
                :
                <footer className={classes.bookStatusAvailable}>
                    <Typography variant="body2" component="p">
                        Livro disponível para empréstimo
                    </Typography>
                </footer>
                }
            </CardActionArea>
        </Card>
        </Link>
        
    )
}

export default BookCard;