import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import JobDetail from './components/JobDetail';
import JobList from './components/JobList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/jobs" component={JobList} />
          <Route path="/job/:id" component={JobDetail} />
        </div>
      </Router>
    );
  }
}

export default App;