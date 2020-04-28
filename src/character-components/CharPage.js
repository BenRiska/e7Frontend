import React from "react";

const CharPage = (props) => {
  return (
    <div className="char-page">
      <h2>{props.char.name}</h2>
      <p>{props.char.element}</p>
      <button onClick={props.handleExit}>Back</button>
    </div>
  );
};

export default CharPage;
