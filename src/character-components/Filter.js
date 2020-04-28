import React from "react";

const Filter = (props) => {
  return (
    <section className="filter">
      <div className="input-box">
        <label for="name">Name</label>
        <input
          type="text"
          name="filteredName"
          onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div className="input-box">
        <label>Element</label>
        <select name="filteredElement" onChange={(e) => props.handleChange(e)}>
          <option value="">No Filter</option>
          <option value="Earth">Earth</option>
          <option value="Ice">Ice</option>
          <option value="Fire">Fire</option>
          <option value="Dark">Dark</option>
          <option value="Light">Light</option>
        </select>
      </div>
      <div className="input-box">
        <label>Class</label>
        <select name="filteredClass" onChange={(e) => props.handleChange(e)}>
          <option value="">No Filter</option>
          <option value="Knight">Knight</option>
          <option value="Ranger">Ranger</option>
          <option value="Warrior">Warrior</option>
          <option value="Thief">Thief</option>
          <option value="Soul Weaver">Soul Weaver</option>
          <option value="Mage">Mage</option>
        </select>
      </div>
      <div className="input-box">
        <label>Star</label>
        <select name="filteredStar" onChange={(e) => props.handleChange(e)}>
          <option value="">No Filter</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
