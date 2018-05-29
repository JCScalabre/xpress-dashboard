import React, { Component } from 'react';

export default class NavBar extends Component {
  logout() {
    console.log('logging out');
  }
  render() {
    return (
      <div>
        <nav className="navbar bg-white">
          <a
            className="navbar-brand offset-md-1"
            href="https://xpresstaxappeals.com/"
          >
            <img
              style={{ height: '65px' }}
              src={require('../content/images/xta_logo.png')}
              alt=""
            />
          </a>
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
