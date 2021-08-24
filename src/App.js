import React from 'react';
import cityData from './cityData';
import './App.css';

class App extends React.Component {
  // Render a list of city names
  // renderCities() {
  //   const cityNames = cityData.map((city, idx) => {
  //     return (
  //       <h2 key={idx}>{city.name}</h2>
  //     );
  //   });

  //   return cityNames;
  // }

  // Render a list of each of the cities name and population
  renderCities() {
    const cityNames = cityData.map((city, idx) => {
      return (
        <li key={idx}>
          <h2>{city.name}</h2>
          <p>Population: {city.population}</p>
        </li>
      );
    });

    return cityNames;
  }

  // Activity
  // Using the map method have renderCities return an array of JSX showing
  // - city name
  // - state
  // - is coastal or not
  // renderCities() {
  //   const citiesList = cityData.map((city) => {
  //     return (
  //       <li>
  //         <h2>{city.name}</h2>
  //         <p>{city.state}</p>
  //         <p>{city.isCoastal ? 'Is a Coastal Town' : 'Is Inland'}</p>
  //       </li>
  //     )
  //   })

  //   return citiesList;
  // }

  // Show the coastal towns in the list
  // Steps
  // 1. Get an array of the coastal towns
  // 2. Take the filtered array and convert it to an array of JSX
  // renderCities() {
  //   // Filtering through cityData to get an array of just the coastal towns
  //   const coastalTowns = cityData.filter((city) => {
  //     return city.isCoastal === true;
  //   });

  //   // Using the map method to convert the array into an array of JSX
  //   const cityList = coastalTowns.map((city, idx) => {
  //     return <li key={idx}>{city.name}</li>
  //   });

  //   return cityList;
  // }

  // Activity:
  // Find the city with the name of Denver and render it to the page
  // Render the name, state, and the population.
  renderCities() {
    const denver = cityData.find((city) => {
      return city.name === 'Denver';
    });

    const denverJSX = (
      <div>
        <h2>{denver.name}</h2>
        <p>{denver.state}</p>
        <p>{denver.population}</p>
      </div>
    )

    return denverJSX;
  }

  // [<li>San Francisco</li>, <li>Phoenix</li>]

  render() {
    return (
      <div className="App">
        <h1>Looping in React</h1>
        {this.renderCities()}
      </div>
    );
  }
}

export default App;
