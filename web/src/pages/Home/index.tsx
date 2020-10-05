import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';

import BookCard from '../../components/BookCard';


import logo from '../../assets/images/logo.png';
import Book from '../../models/Book';
import BookReservation from '../../models/BookReservation';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		booksList: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
		},
		logo: {
			padding: theme.spacing(2),
			width: '100%',
			maxWidth: '500px',
		},
	})
);

const Home = () => {
	const classes = useStyles();
	const [books, setBooks] = useState<Book[]>([]);
	const [reservations, setReservations] = useState<BookReservation[]>([]);

	useEffect(() => {
		try {
			fetch('http://localhost:3333/books', {
				method: 'GET',
			})
			.then(response => response.json())
			.then(data => setBooks(data));
		} catch(error) {
			console.log(error)
		}
		
	}, [])

	useEffect(() => {
		try {
			fetch('http://localhost:3333/reservations', {
				method: 'GET',
			})
			.then(response => response.json())
			.then(data => setReservations(data));
		} catch(error) {
			console.log(error)
		}
		
	}, [])
	console.log(books)
	return (
		<div className={classes.root}>
			<CustomBreadcrumbs />
			<img src={logo} className={classes.logo} alt='logo' />
			<Typography style={{paddingLeft: 10}} color='textPrimary' variant='body1' gutterBottom>
				
				Clique nos exemplares disponíveis abaixo para ver mais informações!
			</Typography>
			<div className={classes.booksList}>
				{books.map((book, index) => {
					const res = reservations.find(r => r.id === book.id)
					if(res){
						return <BookCard key={index} book={book} reserved={true} name={res.name} date={res.date}/>
					} else {
						return <BookCard key={index} book={book} reserved={false}/>
					}
					
				})}
			</div>
		</div>
	);
};

export default Home;
