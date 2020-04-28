import React, { Component } from "react";
/* components for this section*/
import Filter from "../artefact-components/Filter";
import ArtefactContainer from "../artefact-components/ArtefactContainer";
import ArtefactPage from "../artefact-components/ArtefactPage";
/* artefact section styles */
import "../css/artefacts.css";

class Artefacts extends Component {
  constructor() {
    super();
    this.state = {
      artefacts: [],
      filteredName: "",
      filteredClass: "",
      filteredStar: "",
      arteSelected: false,
      selectedArte: "",
    };
  }

  componentDidMount() {
    this.fetchArtefacts();
  }

  /* fetch artefacts from backend server */

  fetchArtefacts = () => {
    fetch("http://localhost:3000/artefacts")
      .then((res) => res.json())
      .then((data) => this.setState({ artefacts: data }));
  };

  /* handle methods to store filter/select values in state */
  handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  handleArteClick = (arte) => {
    this.setState({
      arteSelected: true,
      selectedArte: arte.name,
    });
  };

  handleExit = () => {
    this.setState({
      arteSelected: false,
      selectedArte: "",
    });
  };

  /* filter methods */

  filterName = (artefacts) => {
    artefacts = artefacts.filter((arte) => {
      const n = arte.name.toLowerCase();
      return n.includes(this.state.filteredName);
    });
    return artefacts;
  };

  filterClass = (artefacts) => {
    if (this.state.filteredClass.length > 0) {
      artefacts = artefacts.filter((arte) => {
        return arte.role == this.state.filteredClass;
      });
    }
    return artefacts;
  };

  filterStar = (artefacts) => {
    if (this.state.filteredStar.length > 0) {
      artefacts = artefacts.filter((arte) => {
        return arte.star == this.state.filteredStar;
      });
    }
    return artefacts;
  };

  filteredArtefacts = (artefacts) => {
    artefacts = this.filterName(artefacts);
    artefacts = this.filterClass(artefacts);
    artefacts = this.filterStar(artefacts);

    return artefacts;
  };

  /* find and display selected artefact show page */

  displayArtefact = () => {
    const arte = this.state.artefacts.filter(
      (arte) => arte.name == this.state.selectedArte
    );
    return <ArtefactPage arte={arte[0]} handleExit={this.handleExit} />;
  };

  /* display artefact show page or the whole list with a filter */
  render() {
    return !this.state.arteSelected ? (
      <div className="artefacts">
        <Filter handleChange={this.handleChange} />
        <h1>Artefact Information</h1>
        <ArtefactContainer
          artefacts={this.filteredArtefacts(this.state.artefacts)}
          handleClick={this.handleArteClick}
        />
      </div>
    ) : (
      this.displayArtefact()
    );
  }
}

export default Artefacts;
