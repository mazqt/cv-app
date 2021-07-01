import React from "react";

const PersonalInfo = (props) => {
  return (
    <div>
      <h2>Personal Info</h2>
      <label>First name: </label>
      <br />
      <input
        type="text"
        id="firstName"
        onChange={props.onFieldChange}
        value={props.data.firstName}
        pattern="[a-zA-Z]+"
        required
      ></input>
      <br />
      <label>Last Name: </label>
      <br />
      <input
        type="text"
        id="lastName"
        onChange={props.onFieldChange}
        value={props.data.lastName}
        required
      ></input>
      <br />
      <label>Email: </label>
      <br />
      <input
        type="email"
        id="email"
        onChange={props.onFieldChange}
        value={props.data.email}
        required
      ></input>
      <br />
      <label>Phone Number: </label>
      <br />
      <input
        type="text"
        id="phoneNumber"
        onChange={props.onFieldChange}
        value={props.data.phoneNumber}
        pattern="[0-9]+"
        required
      ></input>
    </div>
  );
};
export default PersonalInfo;
