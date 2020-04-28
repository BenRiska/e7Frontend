import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="input-box">
        <label for="name">Name</label>
        <input
          onChange={(e) => props.handleChange(e)}
          type="text"
          name="filteredName"
        />
      </div>
      <div className="input-box">
        <label for="type">Type</label>
        <select onChange={(e) => props.handleChange(e)} name="filteredType">
          <option value="">No Filter</option>
          <option value="Currency">currency</option>
          <option value="hi">Other Stuff</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
