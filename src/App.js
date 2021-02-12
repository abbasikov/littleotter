import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
          <div className="App">
            <h1> Country Data </h1>
            <label htmlFor="continet">Select a Continent</label>
            <select id="continent">
              <option value="">(All)</option>
              <option value="AF">Africa</option>
              <option value="AS">Asia</option>
              <option value="EU">Europe</option>
              <option value="NA">North America</option>
              <option value="OC">Oceania</option>
              <option value="SA">South America</option>
            </select>
          </div>
        );
    }
}

export default App;
