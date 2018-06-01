import React, { Component } from "react";

export default class AddPropertyModalContent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h2>How would you like to refer them?</h2>
				<p>
					<button className="btn btn-lg btn-block">Email</button>
				</p>
				<p>
					<button className="btn btn-lg btn-block">Phone Text</button>
				</p>
				<p>
					<button className="btn btn-lg btn-block">
						Copy unique referral link
					</button>
				</p>
			</div>
		);
	}
}
