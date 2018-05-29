import React, { Component } from "react";

export default class AddPropertyModalContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			state: "IL"
		};
	}

	handleChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		this.props.onClose();
		const data = {
			id: this.props.id,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip
		};
		this.props.addProperty(data);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<h2>Enter property details:</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label className="control-label">Property Address</label>
						<input
							type="text"
							className="form-control"
							name="address"
							autoComplete="new-password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="control-label">City</label>
						<input
							type="text"
							className="form-control"
							name="city"
							autoComplete="new-password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label className="control-label">State</label>
						<select
							className="form-control"
							name="state"
							onChange={this.handleChange}
							defaultValue="IL"
						>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
					</div>
					<div className="form-group">
						<label className="control-label">Zip Code</label>
						<input
							type="text"
							className="form-control"
							autoComplete="new-password"
							onChange={this.handleChange}
							name="zip"
						/>
					</div>
					<button type="submit" className="btn btn-success">
						Submit Property
					</button>
				</form>
			</div>
		);
	}
}
