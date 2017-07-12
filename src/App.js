import React, { Component } from 'react'

const history = require('history');
const historyObj = history.createMemoryHistory();

import { BrowserRouter as Router, Route } from 'react-router-dom'

import JobDetail from './components/JobDetail';
import JobList from './components/JobList';

class App extends Component {
  render() {
    return (
      <Router history={historyObj}>
        <div>
          <Route path="/jobs" component={JobList} />
          <Route path="/job/:id" component={JobDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
