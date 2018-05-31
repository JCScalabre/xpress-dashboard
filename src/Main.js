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
			page: "referral"
		};
	}

	login = () => {
		this.setState({ loggedIn: true });
	};

	logout = () => {
		this.setState({ loggedIn: false });
	};

	test = () => {
		console.log("Test")
	}

	// Sets state of page based on which NavBar element was clicked:
	navigate = event => {
		// console.log(event.target.text)
		switch (event.target.text) {
			case "Profile":
				this.setState({ page: "profile" });
				break;
			case "Referrals":
			console.log("Here")
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

		const topItems = [
			{ as: "a", content: "Dashboard/Home", key: "dashboard", icon: "dashboard", onClick:this.navigate },
			{ as: "a", content: "Profile", key: "profile", icon: "user", onClick:this.navigate },
			{ as: "a", content: "Properties", key: "properties", icon: "home", onClick:this.navigate },	
			{ as: "a", content: "Referrals", key: "referrals", icon: "location arrow", onClick:this.navigate }
		];
		
		const bottomItems = [
			{ as: "a", content: "Logout", key: "logout", icon: "sign out", onClick:this.logout}
		];
		return (
			<div>
				{this.state.loggedIn ? (
					<div>
						<NavBar
							topItems={topItems}
							bottomItems={bottomItems}
							login={this.login}
							logout={this.logout}
							loggedIn={this.state.loggedIn}
							navigate={this.navigate}	
						/>
						{this.renderPage(this.state.page)}
					</div>
				) : (
					<h1 className="display-4 mb-4">
						Login Input
					</h1>
				)}
			</div>
		);
	};
}
