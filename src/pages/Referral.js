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
			<div className="container">
				<div className="row mt-4 justify-content-center">
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
				</div>
				<div className="row justify-content-center">
					<h1 className="display-3 text-uppercase mt-3">
						Refer Friends. Get Rewards.
					</h1>
				</div>
				<div className="row justify-content-center">
					<button
						onClick={this.openReferralModal}
						className="btn btn-lg btn-success mt-4"
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
