import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <main>       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
