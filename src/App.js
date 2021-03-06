import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import './components/Library/app.scss'
// import Page Components
import { HomePage, AboutPage, BoardPage, ContactPage } from './components/Pages'
import Library from './components/Library'
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
            <Route path='/about' component={ AboutPage } />
            <Route path='/advisory-board' component={ BoardPage } />
            <Route path='/contact' component={ ContactPage } />
            <Route path='/library' component= { Library } />
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
