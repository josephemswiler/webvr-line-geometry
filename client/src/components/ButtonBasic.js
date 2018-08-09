import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ButtonBasic extends Component {
  
  
  hover = event => {
    switch(event.type) {
      case 'mouseenter':
        console.log('entre')
      break
      case 'mouseleave':
        console.log('bye')
      break
      default:
      return
    }
  }

  styles = () => ({
    button: {
      maxWidth: '240px'
    }
  })

  render () {
    return (
      <Button
        style={this.styles().button}
        className={this.props.alignment}
        color='outline-secondary'
        block
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}
      >
        {this.props.text}
      </Button>
    )
  }
}
