import React, { Component } from 'react';

export default class PropertyCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  }
 
  render() {
    return (
      <div className="card mb-4">
        <div className="card-header">
          <h4>{this.props.name}</h4>
          <h5 className="mb-0">
            <p className="mb-1">
              <small>
                <a
                  onClick={this.collapse}
                  data-toggle="collapse"
                  href="#collapseID"
                >
                  {this.state.expanded ? (
                    <span>
                      <i
                        style={{ marginLeft: '2px' }}
                        className="fas fa-caret-down"
                      />
                      &nbsp;Less Information
                    </span>
                  ) : (
                    <span>
                      <i
                        style={{ marginLeft: '2px' }}
                        className="fas fa-caret-right"
                      />
                      &nbsp;More Information
                    </span>
                  )}
                </a>
              </small>
            </p>
            <div className="collapse" id="collapseID">
              Labore adipisicing elit nisi aliqua nostrud sint aliquip mollit
              nostrud.
            </div>
          </h5>
        </div>

        <div className="card-body">
          {this.props.hasAppeal ? (
            <div>
              <p className="card-text text-danger font-italic">
                No current active Appeal. Press below to request one.
              </p>
              <a href="https://google.com" className="btn btn-success">
                <i className="far fa-file-alt" />
                <span> Request Appeal</span>
              </a>
            </div>
          ) : (
            <div>
              <p className="card-text text-success">Current Active Appeal:</p>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">Appeal #</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assessed Value</th>
                    <th scope="col">Township Deadline</th>
                    <th scope="col">Township Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A-2492</td>
                    <td>At Township</td>
                    <td>$ 18,294</td>
                    <td>May 15 2018</td>
                    <td>Reduced to $ 17,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
}
