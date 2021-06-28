import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <h2>I'm PersonalInfo</h2>
        <h2>{this.props.data.firstName}</h2>
        <h2>{this.props.data.lastName}</h2>
        <h2>{this.props.data.email}</h2>
        <h2>{this.props.data.phoneNumber}</h2>
        <label>First name: </label>
        <input
          type="text"
          id="firstName"
          onChange={this.props.onFieldChange}
        ></input>
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          id="lastName"
          onChange={this.props.onFieldChange}
        ></input>
        <br />
        <label>Email: </label>
        <input
          type="text"
          id="email"
          onChange={this.props.onFieldChange}
        ></input>
        <br />
        <label>Phone Number: </label>
        <input
          type="text"
          id="phoneNumber"
          onChange={this.props.onFieldChange}
        ></input>
      </div>
    );
  }
}
