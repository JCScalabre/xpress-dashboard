import React, { Component } from "react";

export default class LoggedIn extends Component {
	render() {
		return (
			<div className="mt-2">
				<h3>
					<i
						style={{ marginTop: "2px" }}
						className="text-success far fa-check-circle"
					/>
					&nbsp;Logged in as JC Scalabre
					<p>
						<small style={{ marginLeft: "38px" }} className="text-muted">
							jc_scalabre@hotmail.com
						</small>
					</p>
				</h3>
				<h1 className="display-3 mb-4">Your Properties</h1>
			</div>
		);
	}
}
