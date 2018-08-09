import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ButtonBasic extends Component {
  constructor (props) {
    super(props)

    this.state = {
      alignment: this.props.alignment,
      text: this.props.text,
      color: this.props.color,
      borderColor: this.props.color,
      backgroundColor: 'transparent'
    }
  }
  
  
  hover = event => {
    switch(event.type) {
      case 'mouseenter':
        this.setState({
          color: '#fff',
          backgroundColor: this.props.color
        })
      break
      case 'mouseleave':
        this.setState({
          color: this.props.color,
          backgroundColor: 'transparent'
        })
      break
      default:
      return
    }
  }

  styles = () => ({
    button: {
      // maxWidth: '240px',
      color: this.state.color,
      borderColor: this.state.borderColor,
      backgroundColor: this.state.backgroundColor,
      letterSpacing: 2,
      textDecoration: 'none'
    }
  })

  render () {
    return (
      <Button
        style={this.styles().button}
        className={this.state.alignment}
        color='outline-primary'
        block
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}
      >
        {this.state.text}
      </Button>
    )
  }
}
