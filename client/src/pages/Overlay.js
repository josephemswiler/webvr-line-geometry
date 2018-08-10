import React, { Component } from 'react'

export default class Overlay extends Component {

  styles = () => ({
    overlay: {
      display: this.props.display ? 'block' : 'none',
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
      opacity: 0.5,
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0
    }
  })

  render () {
    return (
      <div style={this.styles().overlay} />
    )
  }
}
