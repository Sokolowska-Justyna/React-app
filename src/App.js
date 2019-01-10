import React, { Component } from "react";
import * as loadedData from "./assets/data.json";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

class App extends Component {
  constructor() {
    super();

    this.state = { data: [] }
  }

  componentDidMount() {
    this.setState({ data: [...loadedData] })
  }

  render() {
    return (
      <div className="app">
        <Nav data={this.state.data} />
        <Main data={this.state.data} />
      </div>
    );
  }
}

export default App;
