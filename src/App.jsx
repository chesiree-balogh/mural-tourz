import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { stack as Menu } from 'react-burger-menu'
// import Logo from '../src/Images/favicon.ico'

const App = () => {
  return (
    <Router>
      <header className="header">
        <Menu right>
          <a to="/" id="home" className="menu-item" href="/">
            Home
          </a>
          <a to="/1" id="random" className="menu-item" href="/random">
            Random Mural
          </a>
          <a to="/login" id="login" className="menu-item" href="/login">
            Login
          </a>
          <a to="/signUp" id="contact" className="menu-item" href="/contact">
            Sign Up!
          </a>
        </Menu>
        <h1>Mural Tour</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/random" component={Page}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signUp" component={SignUp}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
