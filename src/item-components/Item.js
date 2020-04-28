import React from "react";

const Item = (props) => {
  return (
    <div onClick={(e) => props.handleClick(props.item)} class="item-card">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </div>
  );
};

export default Item;
