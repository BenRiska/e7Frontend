import React from "react";

const Artefact = (props) => {
  return (
    <div className="arte-card">
      <h3>{props.arte.name}</h3>
      <p>{props.arte.role}</p>
      <button onClick={() => props.handleClick(props.arte)}>
        View Profile
      </button>
    </div>
  );
};

export default Artefact;
