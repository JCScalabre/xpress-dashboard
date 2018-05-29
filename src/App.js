import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Dashboard} />
			</Router>
		);
	}
}
