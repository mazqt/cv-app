import React from "react";

const CV = function (props) {
  return (
    <div>
      <header>
        <h1>
          {props.PersonalInfo.firstName} {props.PersonalInfo.lastName}
        </h1>
        <h4>
          {props.PersonalInfo.email}, {props.PersonalInfo.phoneNumber}
        </h4>
      </header>
      <body>
        <h2>Educational History</h2>
        <ul>
          {props.Education.map((obj) => {
            return (
              <li>
                {obj.type}, {obj.name}, {obj.duration}
              </li>
            );
          })}
        </ul>
        <h2>Work History</h2>
        <ul>
          {props.WorkHistory.map((obj) => {
            return (
              <li>
                {obj.type}, {obj.name}, {obj.duration}
              </li>
            );
          })}
        </ul>
      </body>
    </div>
  );
};

export default CV;
