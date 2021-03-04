import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import Home from './pages/home'
import Pricing from './pages/interactive-pricing-component'

function App() {
  return (
    <Router>
      <main>       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/interactive-pricing-component" component={Pricing} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
