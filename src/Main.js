//React:
import React, { Component } from "react";
// Components:
import NavBar from "./components/NavBar.js";
import Properties from "./pages/Properties.js";
import Referral from "./pages/Referral.js";
import Profile from "./pages/Profile.js";
import Login from "./pages/Login.js";
// Cookie:
import Cookie from "./utils/Cookie.js";
// Data:
import API from "./utils/API.js";
import { data } from "./data/ruthfigueroa0528atgmailcom.js";
// CSS:
import "./Main.css";
// Firebase
import FBconfig from "./utils/FirebaseConfig.js";
import actionCodeSettings from "./utils/FirebaseActionCodeSettings.js";

// Initialize Firebase:
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
				<h1>Dashboard / Home View</h1>
			</div>
		);
	}
}

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			page: "",
			email: "",
			isSuccess: false,
			message: "",
			data: data
		};
	}

	componentDidMount = () => {
		this.handleCookie();
		API.getData("jc_scalabre@hotmail.com");
	};

	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// First function to run when page loads, handles cookie:
	handleCookie = () => {
		var email = Cookie.getCookie("email");
		if (email === "") {
			// Cookie not found so proceed to Firebase Auth:
			this.firebaseAuth();
		} else {
			// Cookie exists so log user in:
			this.login();
		}
	};

	// Firebase Authentication function:
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
						this.login();
						// Create cookie
						Cookie.setCookie("email", "jc_scalabre@hotmail.com", 60);
						// Clear email from storage.
						window.localStorage.removeItem("emailForSignIn");
					}.bind(this)
				)
				.catch(function(error) {
					// Login was NOT successful
					console.log(error);
				});
		} else {
			// User is not logged in
		}
	};

	// Send Firebase email to user after user submits their email:
	sendEmail = () => {
		if (this.state.email.trim() !== "") {
			const email = this.state.email;
			firebase
				.auth()
				.sendSignInLinkToEmail(email, actionCodeSettings)
				.then(
					function() {
						// The link was successfully sent. Inform the user.
						this.setState({
							email: "",
							isSuccess: true,
							message: `Email successfully sent to '${email}'. Click the link enclosed to sign into your dashboard.`
						});
						// Save the email locally so you don't need to ask the user for it again
						// if they open the link on the same device.
						window.localStorage.setItem("emailForSignIn", email);
					}.bind(this)
				)
				.catch(
					function(error) {
						console.log(error);
						// Some error occurred, you can inspect the code: error.code
						this.setState({
							isSuccess: false,
							message: `Error: ${email} is not a valid email address. Please try again with a valid email.`
						});
					}.bind(this)
				);
		}
	};

	// Method to log user in:
	login = () => {
		this.setState({ loggedIn: true });
	};

	// Method to log user out:
	logout = () => {
		Cookie.deleteAllCookies();
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
				return <Profile data={this.state.data} />;
			case "referral":
				return <Referral data={this.state.data} />;
			default:
				return <Properties data={this.state.data} />;
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
					<Login
						value={this.state.email}
						handleChange={this.handleChange}
						handleSubmit={this.sendEmail}
						isSuccess={this.state.isSuccess}
						message={this.state.message}
					/>
				)}
			</div>
		);
	};
}
