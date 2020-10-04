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
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';
import books from '../../data/books';
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

const Book = () => {
	const classes = useStyles();

	const { id } = useParams<ParamTypes>();

	const book = books.find((b) => b.id === Number(id));

	const [openReservation, setOpenReservation] = useState(false);
	const [openDevolution, setOpenDevolution] = useState(false);

	const [error, setError] = useState(false);
	const [name, setName] = useState('');

	const [reserved, setReserved] = useState(localStorage.getItem('book_' + id) != null);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

	const handleSubmitDevolution = () => {
		localStorage.removeItem('book_' + id);
		setReserved(false);
		setOpenDevolution(false);
	};

	const handleSubmitReservation = () => {
		if (name === '') {
			setError(true);
			return;
		}

		const bookRes = new BookReservation(Number(id), name, format(new Date(), 'dd/MM/yyyy'));
		localStorage.setItem('book_' + id, JSON.stringify(bookRes));
		setReserved(true);
		setOpenReservation(false);
	};

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
					<form id='name-form' onSubmit={handleSubmitReservation}>
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
					</Grid>

					<Grid container spacing={3} direction='row' justify='center' alignItems='center'>
						<Grid item xs={12} sm={6}>
							<Button
								fullWidth={true}
								disabled={reserved}
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
								disabled={!reserved}
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

export default Book;
