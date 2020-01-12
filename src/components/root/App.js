import React, { Component } from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Dashboard />
      </Container>
    );
  }
}
export default App;
