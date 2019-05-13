import React from "react";

class allCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

      cityFilter: ""
    };
  }

  componentDidMount() {
    fetch("/api/cities", {
      method: "GET",
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  handleChange = e => {
    this.setState({
      cityFilter: e.target.value
    });
  };

  render() {
    var { isLoaded, items } = this.state;
    console.log(this.state.items);
    //let filteredCities = this.state.cities;
    let filteredCities = this.state.items.filter(item => {
      let cityName = item.city.toLowerCase();
      console.log(cityName);
      return cityName.match(this.state.cityFilter.toLowerCase());
    });
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div>
            <label htmlFor="filter">Filter by City: </label>
            <input
              type="text"
              id="filter"
              value={this.state.cityFilter}
              onChange={this.handleChange}
            />
          </div>
          <ul>
            {filteredCities.map(item => (
              <li key={item._id}>
                {item.city} | {item.country}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default allCities;
