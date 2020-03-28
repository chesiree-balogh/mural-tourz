import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
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
          <a to="/1" id="about" className="menu-item" href="/about">
            Random Mural
          </a>
          <a to="/2" id="contact" className="menu-item" href="/contact">
            Favorites
          </a>
        </Menu>
        <h1>Mural Tour</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
