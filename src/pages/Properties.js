// React:
import React, { Component } from "react";
// Components:
import LoggedIn from "../components/LoggedIn.js";
import PropertyCard from "../components/PropertyCard.js";
import Modal from "react-responsive-modal";
import AddPropertyModalContent from "../components/modals/AddPropertyModal.js";

export default class Properties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false
		};
	}

	login = () => {
		this.setState({ loggedIn: true });
	};

	logout = () => {
		this.setState({ loggedIn: false });
	};

	addProperty = data => {
		console.log("Adding this property to DB: ");
		console.log(data);
	};

	openAddPropertyModal = () => {
		this.setState({ modalOpen: true });
	};

	closeAddPropertyModal = () => {
		this.setState({ modalOpen: false });
	};

	render() {
		return (
			<div>
				<div className="container">
					<div>
						<LoggedIn />
						<PropertyCard
							hasAppeal={false}
							name="559 W Surf St, Chicago IL 60657"
							target="one"
						/>
						<PropertyCard
							hasAppeal={true}
							name="9227 Cameron Lane, Morton Grove IL 60053"
							target="two"
						/>
						<button
							onClick={this.openAddPropertyModal}
							className="btn btn-primary"
						>
							<span>
								<i className="fas fa-plus" /> Add Property
							</span>
						</button>
					</div>
				</div>

				<Modal
					open={this.state.modalOpen}
					onClose={this.closeAddPropertyModal}
					center
					classNames={{ modal: "custom-modal" }}
				>
					<AddPropertyModalContent
						addProperty={this.addProperty}
						onClose={this.closeAddPropertyModal}
					/>
				</Modal>
			</div>
		);
	}
}
