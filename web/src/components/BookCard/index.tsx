import { Card, CardActionArea, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../models/Book';

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
        paddingTop: 5,
        minHeight: 50,
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.light,
    },
    bookOwner: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 15,
        paddingRight: 15
    }
  }),
);

interface BookCardProps {
    key: Number,
    book: Book,
    reserved: boolean,
    name?: string,
    date?: string,
  }

const BookCard: React.FC<BookCardProps> = (props) => {
    const classes = useStyles();

    return (
        <Link className={classes.link}  to={'/' + props.book.id.toString()}>
        <Card className={classes.card} elevation={3}>
            <CardActionArea className={classes.cardAction}>
        
                <main className={classes.bookInfo}>
                    
                    <img className={classes.image} src={props.book.cover} alt="Teste"/>
                    <div className="book-text">
                        <Typography variant="body1" color="textPrimary" component="p">
                            Título
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {props.book.title}
                        </Typography>

                        <Typography variant="body1" color="textPrimary" component="p" >
                            Autor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {props.book.authors.map(a => a + "; ")}
                        </Typography>

                        <Typography variant="body1" color="textPrimary" component="p">
                        Palavras-chave
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {props.book.keywords.map(a => a + "; ")}
                        </Typography>
                    </div>
                    
                </main>
                {props.reserved ?
                    <footer className={classes.bookStatusTaken}>
                        <Typography variant="body1"  component="p" gutterBottom>
                            Livro emprestado
                        </Typography>
                        <div className={classes.bookOwner}>
                        <Typography noWrap={true} variant="body2" component="p" gutterBottom>
                            {props.name}
                        </Typography>
                        <Typography variant="body2" component="p" gutterBottom>
                            {props.date}
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