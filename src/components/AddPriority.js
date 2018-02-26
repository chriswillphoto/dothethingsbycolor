import React from "react";
import './AddPriority.css'

const AddPriority = props => {
  const conn = e => {
    e.preventDefault();
    const newPriority = {
      name: e.target.elements[0].value,
      level: parseInt(e.target.elements[1].value, 10)
    };
    props.addToPriorities(newPriority);
    e.target.elements[0].value = ""
  };

  return (
    <form
      className="add-form"
      onSubmit={e => {
        conn(e);
      }}
    >
      <input className="priority-name" placeholder="Name of Priority" />
      <select>
        <option value={5}>5 (Top Priority)</option>
        <option value={4}>4 (Very Important)</option>
        <option value={3}>3 (Has to be done, but can wait)</option>
        <option value={2}>2 (Can be put of if need be)</option>
        <option value={1}>1 (Only done if you can find the time)</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AddPriority;
