import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PersonalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      Education: [],
      WorkHistory: [],
    };
  }

  onFieldChange(event) {
    this.setState({
      PersonalInfo: {
        ...this.state.PersonalInfo,
        [event.target.id]: event.target.value,
      },
    });
  }

  onComponentSubmit(event) {
    event.preventDefault();
    let newObj = {
      type: event.target.type.value,
      name: event.target.name.value,
      duration: event.target.duration.value,
    };
    console.log(newObj);
    this.setState({
      [event.target.id]: [...this.state[event.target.id], newObj],
    });

    event.target.type.value = "";
    event.target.name.value = "";
    event.target.duration.value = "";
  }

  render() {
    return (
      <div className="App">
        <PersonalInfo
          data={this.state.PersonalInfo}
          onFieldChange={this.onFieldChange.bind(this)}
        />
        <Education onComponentSubmit={this.onComponentSubmit.bind(this)} />
        <ul>
          {this.state.Education.map((obj) => {
            return (
              <li>
                {obj.type}, {obj.name}, {obj.duration}
              </li>
            );
          })}
        </ul>
        <WorkHistory onComponentSubmit={this.onComponentSubmit.bind(this)} />
        <ul>
          {this.state.WorkHistory.map((obj) => {
            return (
              <li>
                {obj.type}, {obj.name}, {obj.duration}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
