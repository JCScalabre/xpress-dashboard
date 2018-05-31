import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import NavBar1 from './components/NavBar1.js';

const topItems = [
	{ as: "a", content: "Dashboard/Home", key: "dashboard", icon: "dashboard" },
	{ as: "a", content: "Profile", key: "profile", icon: "user" },
	{ as: "a", content: "Properties", key: "properties", icon: "home" },	
	{ as: "a", content: "Referrals", key: "referrals", icon: "location arrow" }
];

const bottomItems = [
	{ as: "a", content: "Logout", key: "logout", icon: "sign out" }
];

export default class App extends Component {
	
	render() {

		return (
			<Router>
				<div>
					<NavBar1 topItems={topItems} bottomItems={bottomItems}>
						<Route path="/" component={Dashboard} />
					</NavBar1>
				</div>
			</Router>
		);
	}
}
