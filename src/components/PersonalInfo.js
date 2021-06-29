import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <h2>I'm PersonalInfo</h2>
        <label>First name: </label>
        <input
          type="text"
          id="firstName"
          onChange={this.props.onFieldChange}
          value={this.props.data.firstName}
          required
        ></input>
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          id="lastName"
          onChange={this.props.onFieldChange}
          value={this.props.data.lastName}
          required
        ></input>
        <br />
        <label>Email: </label>
        <input
          type="text"
          id="email"
          onChange={this.props.onFieldChange}
          value={this.props.data.email}
          required
        ></input>
        <br />
        <label>Phone Number: </label>
        <input
          type="text"
          id="phoneNumber"
          onChange={this.props.onFieldChange}
          value={this.props.data.phoneNumber}
          required
        ></input>
      </div>
    );
  }
}
