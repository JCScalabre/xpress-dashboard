import React, { Component } from "react";
// Components:
import NavBar from "./components/NavBar.js";
import Properties from "./pages/Properties.js";
import Referral from "./pages/Referral.js";
import Profile from "./pages/Profile.js";
// CSS:
import "./content/css/main.css";
// Firebase
import FBconfig from "./utils/FirebaseConfig.js";
import actionCodeSettings from "./utils/FirebaseActionCodeSettings.js";
const firebase = require("firebase/app");
require("firebase/auth");
firebase.initializeApp(FBconfig);

const topItems = [
	{ as: "a", content: "Dashboard/Home", key: "dashboard", icon: "dashboard" },
	{ as: "a", content: "Profile", key: "profile", icon: "user" },
	{ as: "a", content: "Properties", key: "properties", icon: "home" },
	{ as: "a", content: "Referrals", key: "referral", icon: "location arrow" }
];

class Home extends Component {
	render() {
		return (
			<div className="container">
				<h1>Dashboard Page</h1>
			</div>
		);
	}
}

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
			page: "referral"
		};
	}

	componentWillMount = () => {
		this.firebaseAuth();
	};

	sendEmail = () => {
		// if (this.state.value.trim() !== "") {
		const email = "jc_scalabre@hotmail.com";
		firebase
			.auth()
			.sendSignInLinkToEmail(email, actionCodeSettings)
			.then(
				function() {
					// The link was successfully sent. Inform the user.
					console.log("Email Sent");
					this.setState({ value: "" });
					// Save the email locally so you don't need to ask the user for it again
					// if they open the link on the same device.
					window.localStorage.setItem("emailForSignIn", email);
				}.bind(this)
			)
			.catch(
				function(error) {
					console.log(error);
					// alert('Error!');
					// Some error occurred, you can inspect the code: error.code
				}
			);
		// }
	};

	firebaseAuth = () => {
		if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
			var email = window.localStorage.getItem("emailForSignIn");
			if (!email) {
				// User opened the link on a different device. To prevent session fixation
				// attacks, ask the user to provide the associated email again. For example:
				email = window.prompt("Please provide your email for confirmation");
			}
			// The client SDK will parse the code from the link for you.
			firebase
				.auth()
				.signInWithEmailLink(email, window.location.href)
				.then(
					function(result) {
						// Login was successful
						this.setState({ loggedIn: true });
						// Clear email from storage.
						window.localStorage.removeItem("emailForSignIn");
					}.bind(this)
				)
				.catch(
					function(error) {
						// Login was NOT successful
						console.log(error);
					}
				);
		} else {
			console.log("You are not logged in!")
		}
	};

	login = () => {
		this.setState({ loggedIn: true });
	};

	logout = () => {
		this.setState({ loggedIn: false });
	};

	// Sets state of page based on which NavBar element was clicked:
	navigate = key => {
		this.setState({ page: key });
	};

	// Conditionally Render Page based on this.state.page
	renderPage = page => {
		switch (page) {
			case "dashboard":
				return <Home />;
			case "profile":
				return <Profile />;
			case "referral":
				return <Referral />;
			default:
				return <Properties />;
		}
	};

	render = () => {
		const bottomItems = [
			{
				as: "a",
				content: "Logout",
				key: "logout",
				icon: "sign out",
				onClick: this.logout
			}
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
						>
							{this.renderPage(this.state.page)}
						</NavBar>
					</div>
				) : (
					/*Replace this with Login component*/
					<div>
						<h1 className="display-4 mb-4">Please Login</h1>
						<button onClick={this.sendEmail}>Send Email</button>
					</div>
				)}
			</div>
		);
	};
}
