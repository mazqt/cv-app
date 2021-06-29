import "./styles/App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import CV from "./components/CV";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IDGen: 0,
      PersonalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      Education: [],
      WorkHistory: [],
      Editor: true,
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
      id: this.state.IDGen,
      type: event.target.type.value,
      name: event.target.name.value,
      duration: event.target.duration.value,
    };

    console.log(newObj);
    this.setState({
      IDGen: this.state.IDGen + 1,
      [event.target.id]: [...this.state[event.target.id], newObj],
    });

    event.target.type.value = "";
    event.target.name.value = "";
    event.target.duration.value = "";
  }

  toggleEditor(event) {
    event.preventDefault();
    let toggled = !this.state.Editor;

    this.setState({
      Editor: toggled,
    });
  }

  deleteItem(event, id, list) {
    let items = [...this.state[list]].filter((item) => item.id !== id);
    console.log(items);
    console.log(id);
    this.setState({
      [list]: items,
    });
  }

  render() {
    const editor = (
      <div className="App">
        <div className="Lists">
          <div className="Items">
            <h2>Educational History: </h2>
            <ul>
              {this.state.Education.map((obj) => {
                return (
                  <div>
                    <li>
                      {obj.type}, {obj.name}, {obj.duration}
                    </li>
                    <button
                      type="button"
                      onClick={this.deleteItem.bind(
                        this,
                        null,
                        obj.id,
                        "Education"
                      )}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="Inputs">
            <form id="CV" onSubmit={this.toggleEditor.bind(this)}>
              <PersonalInfo
                data={this.state.PersonalInfo}
                onFieldChange={this.onFieldChange.bind(this)}
              />
            </form>
            <Education onComponentSubmit={this.onComponentSubmit.bind(this)} />
            <WorkHistory
              onComponentSubmit={this.onComponentSubmit.bind(this)}
            />
          </div>
          <div className="Items">
            <h2>Previous Work Experience:</h2>
            <ul>
              {this.state.WorkHistory.map((obj) => {
                return (
                  <div>
                    <li>
                      {obj.type}, {obj.name}, {obj.duration}
                    </li>
                    <button
                      type="button"
                      onClick={this.deleteItem.bind(
                        this,
                        null,
                        obj.id,
                        "WorkHistory"
                      )}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <button type="submit" form="CV">
          Submit your CV
        </button>
      </div>
    );

    if (this.state.Editor) {
      return editor;
    } else {
      return (
        <div className="App">
          <CV
            PersonalInfo={this.state.PersonalInfo}
            Education={this.state.Education}
            WorkHistory={this.state.WorkHistory}
          />
          <button type="button" onClick={this.toggleEditor.bind(this)}>
            Edit your CV
          </button>
        </div>
      );
    }
  }
}
