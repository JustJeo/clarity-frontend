import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import All Pages
import Home from '../pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path = '/home' component = { Home } />
    <Route exact path = '/signup' component = { SignUp } />
  </Switch>
)

export default Routes