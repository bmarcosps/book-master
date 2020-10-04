import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Book from './pages/Book';
import Header from './components/Header';


const Routes = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Route component={Home} path='/' exact />
			<Switch>
				<Route path="/:id" children={<Book />} />
			</Switch>
		
		</BrowserRouter>
	);
};

export default Routes;
