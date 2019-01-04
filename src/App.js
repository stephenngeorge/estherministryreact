import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// import Page Components
import HomePage from './components/Pages/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route path='/' component={ HomePage } />
        
        </div>
      </Router>
    );
  }
}

export default App;
