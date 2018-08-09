import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/lux/bootstrap.css'
import NavTop from './components/NavTop'
import webVR from './webVR/index'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Details from './pages/Details'
import About from './pages/About'
import Contact from './pages/Contact'

export default class App extends Component {
  componentDidMount () {
    webVR(this.webVR)
  }

  styles = () => ({
    canvas: {
      width: '100vw',
      height: '100vh',
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -9999
    },
    navbar: {
      zIndex: 1
    }
  })

  render () {
    return (
      <Router>
        <div>
        <div style={this.styles().canvas} ref={(element) => { this.webVR = element }} />
          <NavTop style={this.styles().canvas} />
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
  }
}
