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
        <label for="role">Class</label>
        <select name="filteredClass" onChange={(e) => props.handleChange(e)}>
          <option value="">No Filter</option>
          <option value="Ranger">Ranger</option>
          <option value="Thief">Thief</option>
          <option value="Knight">Knight</option>
          <option value="Mage">Mage</option>
          <option value="Warrior">Warrior</option>
          <option value="Soul Weaver">Soul Weaver</option>
        </select>
      </div>
      <div className="input-box">
        <label for="star">Star</label>
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
