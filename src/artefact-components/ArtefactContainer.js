import React from "react";
import Artefact from "./Artefact";

const ArtefactContainer = (props) => {
  const displayArtefacts = (artefacts) => {
    return artefacts.map((arte) => (
      <Artefact arte={arte} handleClick={props.handleClick} />
    ));
  };
  return (
    <div className="artefact-container">
      {displayArtefacts(props.artefacts)}
    </div>
  );
};

export default ArtefactContainer;
