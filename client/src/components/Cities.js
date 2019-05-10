import React from "react";

class allCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
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
