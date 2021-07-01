import "./styles/App.css";
import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import CV from "./components/CV";

const App = (props) => {
  const [IDGen, setIDGen] = useState(0);
  const [PersonalState, setPersonalState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [EducationState, setEducationState] = useState([]);
  const [WorkState, setWorkState] = useState([]);
  const [Editor, setEditor] = useState(true);

  function onFieldChange(event) {
    setPersonalState({
      ...PersonalState,
      [event.target.id]: event.target.value,
    });
  }

  function onComponentSubmit(event) {
    event.preventDefault();
    let newObj = {
      id: IDGen,
      type: event.target.type.value,
      name: event.target.name.value,
      duration: event.target.duration.value,
    };

    setIDGen(IDGen + 1);

    if (event.target.id === "WorkHistory") {
      setWorkState([...WorkState, newObj]);
    } else {
      setEducationState([...EducationState, newObj]);
    }

    event.target.type.value = "";
    event.target.name.value = "";
    event.target.duration.value = "";
  }

  function toggleEditor(event) {
    event.preventDefault();
    let toggled = !Editor;

    setEditor(toggled);
  }

  function deleteItem(id, list) {
    if (list === "WorkHistory") {
      let items = [...WorkState.filter((item) => item.id !== id)];
      setWorkState(items);
    } else {
      let items = [...EducationState.filter((item) => item.id !== id)];
      setEducationState(items);
    }
  }

  const editPage = (
    <div className="App">
      <div className="Lists">
        <div className="Items">
          <h2>Educational History: </h2>
          <ul>
            {EducationState.map((obj) => {
              return (
                <div>
                  <li>
                    {obj.type}, {obj.name}, {obj.duration}
                  </li>
                  <button
                    type="button"
                    onClick={deleteItem.bind(null, obj.id, "Education")}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="Inputs">
          <form id="CV" onSubmit={toggleEditor}>
            <PersonalInfo data={PersonalState} onFieldChange={onFieldChange} />
          </form>
          <Education onComponentSubmit={onComponentSubmit} />
          <WorkHistory onComponentSubmit={onComponentSubmit} />
        </div>
        <div className="Items">
          <h2>Previous Work Experience:</h2>
          <ul>
            {WorkState.map((obj) => {
              return (
                <div>
                  <li>
                    {obj.type}, {obj.name}, {obj.duration}
                  </li>
                  <button
                    type="button"
                    onClick={deleteItem.bind(null, obj.id, "WorkHistory")}
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

  if (Editor) {
    return editPage;
  } else {
    return (
      <div className="App">
        <CV
          PersonalInfo={PersonalState}
          Education={EducationState}
          WorkHistory={WorkState}
        />
        <button type="button" onClick={toggleEditor}>
          Edit your CV
        </button>
      </div>
    );
  }
};
export default App;
