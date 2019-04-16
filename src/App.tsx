import React, { Component } from 'react';
import AmbientMeasurement from './components/ambient/ambientMeasurement';
import './App.css';
import DashboardPage from './components/dashboard/DashboardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardPage/>
      </div>
    );
  }
}

export default App;
