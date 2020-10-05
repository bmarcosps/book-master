import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Header from './components/Header';


const Routes = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Route component={Home} path='/' exact />
			<Switch>
				<Route path="/:id" children={<BookDetail />} />
			</Switch>
		
		</BrowserRouter>
	);
};

export default Routes;
