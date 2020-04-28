import React from "react";
import Item from "../item-components/Item";

const ItemContainer = (props) => {
  const renderItems = () => {
    return props.items.map((item) => (
      <Item item={item} handleClick={props.handleClick} />
    ));
  };
  return <div className="item-container">{renderItems()}</div>;
};

export default ItemContainer;
