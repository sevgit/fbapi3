import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';

import Header from './components/Header/Index';



ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={Header} />
				<Route exact path="/" component={App} />
				<Route exact path="/user" component={App}/>
			</div>
		</BrowserRouter>

	</Provider>, document.getElementById('root'));

