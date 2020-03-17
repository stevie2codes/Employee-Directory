import api from "../../utils/api";
import React, { Component } from "react";
import List from "../list";
import Header from "../header/header";

class Employee extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = query => {
    api
      .search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <List className="listContainer" name={this.state.results.length} />
      </React.Fragment>
    );
  }
}

export default Employee;
