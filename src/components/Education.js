import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2>I'm Education</h2>
        <form id="Education" onSubmit={this.props.onComponentSubmit}>
          <label>Type of Education: </label>
          <input type="text" id="type"></input>
          <br />
          <label>Name of School: </label>
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
