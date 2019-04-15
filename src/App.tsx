import React, { Component } from 'react';
import AmbientMeasurement from './components/ambient/ambientMeasurement';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmbientMeasurement/>
      </div>
    );
  }
}

export default App;
