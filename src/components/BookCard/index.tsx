import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../models/Book';

import './styles.css'


const BookCard: React.FC<Book> = (props) => {
    return (
        <Link className="book-item"  to={'/' + props.id.toString()}>
                <main className="book-info">
                    <img src={props.cover} alt="Teste"/>
                    <div className="book-text">
                        <strong>Título</strong><p>{props.title}</p>
                        <strong>Autor</strong><p>{props.authors.map(a => a + "; ")}</p>
                        <strong>Palavras-chave</strong><p>{props.keywords.map(a => a + "; ")}</p>
                    
                    </div>
                    
                </main>
                <footer className="book-status available">
                    
                    <strong>Livro disponível para empréstimo</strong>
                    
                </footer>
                
        </Link>
        
    )
}

export default BookCard;