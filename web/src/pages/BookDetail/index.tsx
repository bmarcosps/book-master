import {
	Button,
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Typography,
} from '@material-ui/core';
import { format } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';

import Book from '../../models/Book';
import BookReservation from '../../models/BookReservation';

interface ParamTypes {
	id: string;
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
			width: '100%',
		},
	})
);

const BookDetail = () => {
	const classes = useStyles();

	const { id } = useParams<ParamTypes>();

	//const book = books.find((b) => b.id === Number(id));
	const [book, setBook] = useState<Book|undefined>(undefined);
	const [reservation, setReservation] = useState<BookReservation|undefined>(undefined);

	
	const [openReservation, setOpenReservation] = useState(false);
	const [openDevolution, setOpenDevolution] = useState(false);

	const [error, setError] = useState(false);
	const [name, setName] = useState('');

	//const [reserved, setReserved] = useState(localStorage.getItem('book_' + id) != null);
	
	useEffect(() => {
		try {
			fetch('http://localhost:3333/books/'+id, {
				method: 'GET',
			})
			.then(response => response.json())
			.then(data => setBook(data));
		} catch(error) {
			console.log(error)
		}
		
	},[id])


	useEffect(() => {
		try {
		fetch('http://localhost:3333/reservations/'+id, {
			method: 'GET',
		})
		.then(response => {
			if(response.ok)
				return response.json();
			else
				return undefined;
		})
		.then(data => setReservation(data));;

		} catch(error) {
			console.log(error)
		}
		
	},[id])

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setName(event.target.value);
	};

	const handleOpenReservation = () => {
		setOpenReservation(true);
	};

	const handleCloseReservation = () => {
		setName('');
		setOpenReservation(false);
	};

	const handleOpenDevolution = () => {
		setOpenDevolution(true);
	};

	const handleCloseDevolution = () => {
		setName('');
		setOpenDevolution(false);
	};

	const handleSubmitDevolution = useCallback(async () => {
		//localStorage.removeItem('book_' + id);
		
		const response = await fetch('http://localhost:3333/reservations/'+id, {
			method: 'DELETE',
		})

		if(!response.ok){
			console.error(response.json())
			return;
		}

		setReservation(undefined);
		setOpenDevolution(false);
	}, [id]);

	const handleSubmitReservation = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (name === '') {
			setError(true);
			return;
		}

		const bookRes = new BookReservation(Number(id), name, format(new Date(), 'dd/MM/yyyy'));

		//localStorage.setItem('book_' + id, JSON.stringify(bookRes));
		const response = await fetch('http://localhost:3333/reservations', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(bookRes)
		})

		if(!response.ok){
			console.error(response.json())
			return;
		}

		setReservation(bookRes);
		setOpenReservation(false);
	}, [name, id]);

	if (book) {
		const devolutionDialog = (
			<Dialog
				open={openDevolution}
				onClose={handleCloseDevolution}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Devolver livro: {book.title} ?</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Você quer mesmo devolver o livro?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDevolution} color='secondary'>
						Cancelar
					</Button>
					<Button onClick={handleSubmitDevolution} color='primary'>
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		);

		const reservationDialog = (
			<Dialog open={openReservation} onClose={handleCloseReservation} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Reservar livro: {book.title}</DialogTitle>

				<DialogContent>
					<DialogContentText>
						Para reservar um livro você deve informar seu nome e confirmar.
					</DialogContentText>
					<form id='name-form' onSubmit={e => handleSubmitReservation(e)}>
						<TextField
							autoFocus
							margin='dense'
							id='name'
							label='Nome completo'
							placeholder='Nome completo'
							type='text'
							fullWidth
							required
							error={error}
							onChange={handleNameChange}
							value={name}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseReservation} color='secondary'>
						Cancelar
					</Button>
					<Button form='name-form' type='submit' color='primary'>
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		);

		return (
			<div className={classes.root}>
				<CustomBreadcrumbs path={[book.title]} />

				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<img className={classes.image} src={book.cover} alt='Teste' />
					</Grid>
					<Grid className='book-text' item xs={12} sm={8}>
						<Typography variant='body1' color='textPrimary' component='p'>
							Título
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p' gutterBottom>
							{book.title}
						</Typography>
						<Typography variant='body1' color='textPrimary' component='p'>
							Autor
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p' gutterBottom>
							{book.authors.map((a) => a + '; ')}
						</Typography>
						<Typography variant='body1' color='textPrimary' component='p'>
							Idioma
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p' gutterBottom>
							{book.idiom}
						</Typography>
						<Typography variant='body1' color='textPrimary' component='p'>
							Resumo
						</Typography>
						<Typography variant='body2' color='textSecondary' align='justify' component='p' gutterBottom>
							{book.summary}
						</Typography>
						<Typography variant='body1' color='textPrimary' component='p'>
							Páginas
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p' gutterBottom>
							{book.pages}
						</Typography>
						<Typography variant='body1' color='textPrimary' component='p'>
							Palavras-chave
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p' gutterBottom>
							{book.keywords.map((a) => a + '; ')}
						</Typography>
						{
							reservation !== undefined? 
							<div>
							<Typography variant='h6' color='primary' component='p'>
								Reserva
							</Typography>
							<Typography variant='body1' color='primary' component='p'>
								Nome: 
							</Typography>
							<Typography variant='body2' color='textPrimary' component='p' gutterBottom>
								{reservation.name}
							</Typography>
							<Typography variant='body1' color='primary' component='p'>
								Data: 
							</Typography>
							<Typography variant='body2' color='textPrimary' component='p' gutterBottom>
								{reservation.date}
							</Typography>
							</div>
							:
							""
						}
						
					</Grid>

					<Grid container spacing={3} direction='row' justify='center' alignItems='center'>
						
						
						<Grid item xs={12} sm={6}>
							<Button
								fullWidth={true}
								disabled={reservation !== undefined}
								variant='contained'
								color='primary'
								onClick={handleOpenReservation}
							>
								Reservar
							</Button>
							{reservationDialog}
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								fullWidth={true}
								disabled={reservation === undefined}
								variant='contained'
								color='secondary'
								onClick={handleOpenDevolution}
							>
								Devolver
							</Button>
							{devolutionDialog}
						</Grid>
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
};

export default BookDetail;
