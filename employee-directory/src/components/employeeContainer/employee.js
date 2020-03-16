import api from "../../utils/api";
import React, { Component } from "react";
import List from "../list";

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
    return <List name={this.state.results.length} />;
  }
}

export default Employee;
