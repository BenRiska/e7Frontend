import React from "react";

const Char = (props) => {
  return (
    <div
      onClick={() => {
        props.handleClick(props.char);
      }}
      className="char"
    >
      <p>{props.char.name}</p>
      <p>{props.char.element}</p>
    </div>
  );
};

export default Char;
