import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form id="Education" onSubmit={this.props.onComponentSubmit}>
          <label>Type of Education: </label>
          <br />
          <select id="type" required>
            <option value="High School">High School</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Major">Major</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Certification">Certification</option>
            <option value="Non-school course">Non-school course</option>
          </select>
          <br />
          <label>Name of Institution: </label>
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
