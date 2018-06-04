// React:
import React, { Component } from "react";
// Components:
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
						<div className="mt-3">
							<h3>
								<i
									style={{ marginTop: "2px" }}
									className="text-success far fa-check-circle"
								/>
								&nbsp;Logged in as {this.props.data.ContactDetails.Name}
								<p>
									<small
										style={{ marginLeft: "38px" }}
										className="text-muted"
									>
										{this.props.data.ContactDetails.Email}
									</small>
								</p>
							</h3>
							<h1 className="display-3 mb-4 mt-0">Your Properties</h1>
						</div>
						{console.log(this.props.data)}
						{this.props.data.PropertyDetailList.map((data, i) => {
							return (
								<PropertyCard
									data={data}
									target={i}
									key={i}
								/>
							);
						})}
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
