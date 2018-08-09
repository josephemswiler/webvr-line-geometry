import React, { Component } from 'react'

export default class Overlay extends Component {

  styles = () => ({
    overlay: {
      display: this.props.display ? 'block' : 'none',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, .5)',
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
