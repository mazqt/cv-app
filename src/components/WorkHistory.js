import React, { Component } from "react";

export default class WorkHistory extends Component {
  render() {
    return (
      <div>
        <h2>Previous work</h2>
        <form id="WorkHistory" onSubmit={this.props.onComponentSubmit}>
          <label>Profession: </label>
          <br />
          <input type="text" id="type" required></input>
          <br />
          <label>Employer: </label>
          <br />
          <input type="text" id="name" required></input>
          <br />
          <label>From - To, in years: </label>
          <br />
          <input
            type="text"
            id="duration"
            pattern="[0-9]{4}\s-\s[0-9]{4}"
            required
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
