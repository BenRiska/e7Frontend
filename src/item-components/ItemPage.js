import React from "react";

const ItemPage = (props) => {
  return (
    <div className="item-page">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <button onClick={props.handleExit}>Exit</button>
    </div>
  );
};

export default ItemPage;
