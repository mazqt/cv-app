import React, { Component } from "react";

export default class WorkHistory extends Component {
  render() {
    return (
      <div>
        <h2>I'm WorkHistory</h2>
        <form id="WorkHistory" onSubmit={this.props.onComponentSubmit}>
          <label>Profession: </label>
          <input type="text" id="type"></input>
          <br />
          <label>Employer: </label>
          <input type="text" id="name"></input>
          <br />
          <label>From - To: </label>
          <input type="text" id="duration"></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
