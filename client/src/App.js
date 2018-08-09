import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/lux/bootstrap.css'
import NavTop from './components/NavTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Details from './pages/Details'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => (
  <Router>
    <div>
      <NavTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/projects/:id' component={Details} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  </Router>
)

export default App
