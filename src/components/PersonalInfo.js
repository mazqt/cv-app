import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <h2>Personal Info</h2>
        <label>First name: </label>
        <br />
        <input
          type="text"
          id="firstName"
          onChange={this.props.onFieldChange}
          value={this.props.data.firstName}
          pattern="[a-zA-Z]+"
          required
        ></input>
        <br />
        <label>Last Name: </label>
        <br />
        <input
          type="text"
          id="lastName"
          onChange={this.props.onFieldChange}
          value={this.props.data.lastName}
          required
        ></input>
        <br />
        <label>Email: </label>
        <br />
        <input
          type="email"
          id="email"
          onChange={this.props.onFieldChange}
          value={this.props.data.email}
          required
        ></input>
        <br />
        <label>Phone Number: </label>
        <br />
        <input
          type="text"
          id="phoneNumber"
          onChange={this.props.onFieldChange}
          value={this.props.data.phoneNumber}
          pattern="[0-9]+"
          required
        ></input>
      </div>
    );
  }
}
