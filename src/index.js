import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import ABOUTUS from './views/a-b-o-u-t-u-s'
import Home from './views/home'
import ACADEMICS from './views/a-c-a-d-e-m-i-c-s'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={ABOUTUS} path="/a-b-o-u-t-u-s" />
        <Route exact component={Home} path="/" />
        <Route exact component={ACADEMICS} path="/a-c-a-d-e-m-i-c-s" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
