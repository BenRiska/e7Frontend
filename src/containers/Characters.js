import React, { Component } from "react";
/* components for this section */
import CharContainer from "../character-components/CharContainer";
import Filter from "../character-components/Filter";
import CharPage from "../character-components/CharPage";
/* character section styles */
import "../css/characters.css";

export default class Characters extends Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      filteredName: "",
      filteredElement: "",
      filteredStar: "",
      filteredClass: "",
      charSelected: false,
      selectedChar: "",
    };
  }

  componentDidMount() {
    this.fetchChars();
  }

  /* handle methods to store filter/select values */

  handleFilteredValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  handleCharClick = (char) => {
    this.setState({ charSelected: true, selectedChar: char.name });
  };

  handleExit = () => {
    this.setState({ charSelected: false, selectedChar: "" });
  };

  /* find selected char and display show page */

  displayChar = () => {
    const char = this.state.chars.filter(
      (char) => char.name === this.state.selectedChar
    );

    return <CharPage char={char[0]} handleExit={this.handleExit} />;
  };

  /* fetch characters from the backend server */

  fetchChars = () => {
    fetch("http://localhost:3000/units")
      .then((res) => res.json())
      .then((data) => this.setState({ chars: data }));
  };

  /* filter methods */

  filterName = (chars) => {
    chars = chars.filter((char) => {
      const n = char.name.toLowerCase();
      return n.includes(this.state.filteredName);
    });
    return chars;
  };
  filterElement = (chars) => {
    if (this.state.filteredElement.length > 0) {
      chars = chars.filter((char) => {
        return char.element === this.state.filteredElement;
      });
    }
    return chars;
  };
  filterClass = (chars) => {
    if (this.state.filteredClass.length > 0) {
      console.log(chars);
      chars = chars.filter((char) => {
        return char.role == this.state.filteredClass;
      });
    }
    return chars;
  };
  filterStar = (chars) => {
    if (this.state.filteredStar.length > 0) {
      console.log(chars);
      chars = chars.filter((char) => {
        return char.stars == this.state.filteredStar;
      });
    }
    return chars;
  };

  filterChars = (chars) => {
    chars = this.filterName(chars);
    chars = this.filterElement(chars);
    chars = this.filterClass(chars);
    chars = this.filterStar(chars);

    return chars;
  };

  /* check if char is selected and render show page otherwise render char list and filter */
  render() {
    return !this.state.charSelected ? (
      <div className="characters">
        <Filter handleChange={this.handleFilteredValue} />
        <h1>Character Information</h1>
        <CharContainer
          chars={this.filterChars(this.state.chars)}
          handleClick={this.handleCharClick}
        />
      </div>
    ) : (
      this.displayChar()
    );
  }
}
