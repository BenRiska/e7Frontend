import React, { Component } from "react";
/* router imports */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* main components for this website */
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Artefacts from "./containers/Artefacts";
import Items from "./containers/Items";
import Catalysts from "./containers/Catalysts";
import Tierlist from "./containers/Tierlist";
import Guides from "./containers/Guides";
/* general styles */
import "./css/App.css";

class App extends Component {
  /* create routes for each website section and link them to the navbar */
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <h5>Epic7 x FF</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/characters">Characters</Link>
              </li>
              <li>
                <Link to="/artefacts">Artefacts</Link>
              </li>
              <li>
                <Link to="/items">Item List</Link>
              </li>
              <li>
                <Link to="/catalysts">Catalysts</Link>
              </li>
              <li>
                <Link to="/tierlist">Tier List</Link>
              </li>
              <li>
                <Link to="/guides">Guides</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/artefacts">
            <Artefacts />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/catalysts">
            <Catalysts />
          </Route>
          <Route path="/tierlist">
            <Tierlist />
          </Route>
          <Route path="/guides">
            <Guides />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
