import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button } from 'reactstrap'
import 'bootswatch/dist/lux/bootstrap.css'
import NavTop from './components/NavTop'
import webVR from './webVR/index'
import Projects from './pages/Projects'
import Details from './pages/Details'
import About from './pages/About'
import Overlay from './pages/Overlay'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      overlay: false
    }
  }

  componentDidMount () {
    webVR(this.webVR)
  }

  toggleOverlay = () => {
    this.setState({
      overlay: !this.state.overlay
    })
  }

  windowResize = isOpen => {
    if (this.state.overlay && window.innerWidth >= 768) {
      this.setState({
        overlay: false
      })
    } else if (window.innerWidth < 768 && isOpen) {
      this.setState({
        overlay: true
      })
    } else {
      this.setState({
        overlay: false
      })
    }
  }

  toggle = () => {
    
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
      zIndex: 2
    }
  })

  render () {
    return (
      <Router>
        <div>
          <div
            style={this.styles().canvas}
            ref={element => {
              this.webVR = element
            }}
          />
          <NavTop style={this.styles().canvas} toggleOverlay={this.toggleOverlay} windowResize={this.windowResize} />
          <Overlay display={this.state.overlay} />
          <Switch>
            <Route exact path='/' component={About} toggle={this.toggle} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/:id' component={Details} />
          </Switch>
        </div>
      </Router>
    )
  }
}
