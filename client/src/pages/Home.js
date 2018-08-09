import React, { Component } from 'react'
import Header from '../components/Header'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navTopOffset: 92,
      currentWindowHeight: window.innerHeight
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    this.setState({
      currentWindowHeight: window.innerHeight
    })
  }

  styles = () => ({
    wrapper: {
      width: '100vw',
      height: this.state.currentWindowHeight - this.state.navTopOffset
    }
})

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Header navTopOffset={this.state.navTopOffset}/>
      </div>
    )
  }
}
