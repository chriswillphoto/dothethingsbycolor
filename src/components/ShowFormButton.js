import React from "react";
import "./ShowFormButton.css";

const ShowFormButton = (props) => {
  return <button className="show-form" onClick={props.showForm}>+</button>;
};

export default ShowFormButton;
