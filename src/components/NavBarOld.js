import React, { Component } from "react";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar bg-white">
          <a
            className="navbar-brand offset-md-1"
            href="https://xpresstaxappeals.com/"
          >
            <img
              style={{ height: "65px" }}
              src={require("../content/images/xta_logo.png")}
              alt=""
            />
          </a>
          <ul className="navbar-nav" onClick={this.props.navigate}>
            <li className="nav-item active">
              <a className="nav-link">Properties</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Referrals</a>
            </li>
          </ul>
          {this.props.loggedIn ? (
            <button onClick={this.props.logout} className="btn mr-5 btn-danger">
              <i className="fas fa-sign-out-alt" /> Logout
            </button>
          ) : (
            <button onClick={this.props.login} className="btn mr-5 btn-success">
              <i className="fas fa-sign-in-alt" /> Login
            </button>
          )}
        </nav>
      </div>
    );
  }
}
