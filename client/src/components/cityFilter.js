import React, { Component } from "react";

class filterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFilter: ""
    };
  }

  handleChange = e => {
    this.setState({
      cityFilter: e.target.value
    });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by City: </label>
        <input
          type="text"
          id="filter"
          value={this.state.cityFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default filterForm;
