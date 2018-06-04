// React:
import React, { Component } from "react";
// Components:
import Modal from "react-responsive-modal";
import ReferralModalContent from "../components/modals/ReferralModal.js";

export default class Referral extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false
		};
	}

	openReferralModal = () => {
		this.setState({ modalOpen: true });
	};

	closeReferralModal = () => {
		this.setState({ modalOpen: false });
	};

	render() {
		return (
			<div className="container text-center">
				<div className="row d-block mt-4">
					<img
						style={{ height: "200px" }}
						src={require("../content/images/referral.png")}
						alt=""
					/>
					<i className="fas fa-arrow-right my-auto fa-4x ml-3" />
					<img
						style={{ height: "200px" }}
						src={require("../content/images/gift.png")}
						alt=""
					/>
					<h1 className="display-3">Refer Friends. Get Rewards.</h1>
					<h1>How does it work?</h1>
					<h3>
						We provide a custom link and code that identifies you as the refferer. For every individual 
						that you refer, you and your friend will earn $20
						after they sign up. Eligible properties include single family homes inside of Cook County.
					</h3>
					<button
						onClick={this.openReferralModal}
						className="btn btn-lg btn-success"
					>
						Click To Get Started
					</button>
				</div>
				<Modal
					open={this.state.modalOpen}
					onClose={this.closeReferralModal}
					center
					classNames={{ modal: "custom-modal" }}
				>
					<ReferralModalContent
						addProperty={this.addProperty}
						onClose={this.closeReferralModal}
					/>
				</Modal>
			</div>
		);
	}
}
