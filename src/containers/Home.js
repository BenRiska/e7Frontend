import React, { Component } from "react";
/* components for this section */
import Showcase from "../home-components/Showcase";
import Events from "../home-components/Events";
import Tools from "../home-components/Tools";
import Email from "../home-components/Email";
/* home styles */
import "../css/home.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  /* handle methods for setting form values in state */

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  /* post method to send email details to the server */

  postEmail = () => {
    fetch("http://localhost:3000/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: this.state.email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="home">
        <Showcase />
        <Email handleEmail={this.handleEmail} postEmail={this.postEmail} />
        <Events />
        <Tools />
      </div>
    );
  }
}
