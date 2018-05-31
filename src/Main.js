import React, { Component } from "react";
// Components:
import NavBar from "./components/NavBar.js";
import Properties from "./pages/Properties.js";
import Referral from "./pages/Referral.js";
import Profile from "./pages/Profile.js";
// CSS:
import "./content/css/main.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
			page: "properties"
		};
	}

	login = () => {
		this.setState({ loggedIn: true });
	};

	logout = () => {
		this.setState({ loggedIn: false });
	};

	// Sets state of page based on which NavBar element was clicked:
	navigate = event => {
		switch (event.target.text) {
			case "Profile":
				this.setState({ page: "profile" });
				break;
			case "Referrals":
				this.setState({ page: "referral" });
				break;
			default:
				this.setState({ page: "properties" });
				break;
		}
	};

	// Conditionally Render Page based on this.state.page
	renderPage = page => {
		switch (page) {
			case "profile":
				return <Profile />;
			case "referral":
				return <Referral />;
			default:
				return <Properties />;
		}
	};

	render = () => {
		return (
			<div>
				<NavBar
					login={this.login}
					logout={this.logout}
					loggedIn={this.state.loggedIn}
					navigate={this.navigate}
				/>
				{this.state.loggedIn ? (
					this.renderPage(this.state.page)
				) : (
					<h1 className="display-4 mb-4">
						Please Login to view this page
					</h1>
				)}
			</div>
		);
	};
}
