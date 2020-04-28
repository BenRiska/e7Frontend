import React from "react";

const ArtefactPage = (props) => {
  return (
    <div className="arte-page">
      <h1>{props.arte.name}</h1>
      <p>{props.arte.role}</p>
      <button onClick={props.handleExit}>Exit</button>
    </div>
  );
};

export default ArtefactPage;
