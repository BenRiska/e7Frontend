import React, { Component } from "react";
import Char from "./Char";

class CharContainer extends Component {
  displayChars = () => {
    return this.props.chars.map((char) => (
      <Char char={char} handleClick={this.props.handleClick} />
    ));
  };

  render() {
    return <section className="char-container">{this.displayChars()}</section>;
  }
}

export default CharContainer;
