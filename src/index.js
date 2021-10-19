import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './index.scss';

import App from './App.jsx';
import SingleMovie from './components/SingleMovie/SingleMovie.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

ReactDOM.render(
	<div id='main'>
		<HashRouter basename='/'>
			<NavBar />
			<Switch>
				<Route path='/' exact>
					<App />
				</Route>
				<Route path='/:id' exact>
					<SingleMovie />
				</Route>
			</Switch>
		</HashRouter>
	</div>
	, document.getElementById('root')
);
