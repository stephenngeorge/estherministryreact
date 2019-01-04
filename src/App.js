import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// import Page Components
import { HomePage } from './components/Pages'
import { Affiliation, Navigation } from './components/Globals'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header>
            <Navigation />
          </header>

          <div className='app-contents'>
            <Route path='/' exact component={ HomePage } />
          </div>

          <footer>
            <Affiliation />
          </footer>
        
        </div>
      </Router>
    );
  }
}

export default App;
