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
			<div className="container">
				<div>
					<h2 className="mt-4 mb-0">
						<i
							style={{ marginTop: "2px", marginRight: "2px" }}
							className="text-success far fa-check-circle"
						/>
						&nbsp;Logged in as {this.props.data.ContactDetails.Name}
						<p>
							<small
								style={{ marginLeft: "32px" }}
								className="text-muted"
							>
								{this.props.data.ContactDetails.Email}
							</small>
						</p>
					</h2>
					<h1 className="display-3 mb-4 mt-0">Your Properties</h1>
					{console.log(this.props.data)}
					{this.props.data.PropertyDetailList.map((data, i) => {
						return <PropertyCard data={data} target={i} key={i} />;
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
