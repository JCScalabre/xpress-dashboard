import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import LoggedIn from '../components/LoggedIn.js';
import PropertyCard from '../components/PropertyCard.js';
import '../content/css/dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: true };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ loggedIn: true });
  }

  logout() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div>
        <NavBar
          login={this.login}
          logout={this.logout}
          loggedIn={this.state.loggedIn}
        />
        <div className="container">
          {this.state.loggedIn ? (
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
              <button onClick={this.login} className="btn btn-primary">
                <span>
                  <i className="fas fa-plus" /> Add Property
                </span>
              </button>
            </div>
          ) : (
            <h1 className="display-4 mb-4">Please Login to view this page</h1>
          )}
        </div>
      </div>
    );
  }
}
