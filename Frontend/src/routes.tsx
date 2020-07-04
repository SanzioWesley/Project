import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './components/login';

export default class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route component={Login} path="/" exact/>
			</BrowserRouter>
		)
	}
}