import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Välkommen!</h1>
          <p>Welcome! We are so happy to have you here.</p>
        </div>
      </div>
    );
  }
}
