import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../src/components/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         

          <Switch>

            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
