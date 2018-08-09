import React, { Component } from 'react'

export default class Projects extends Component {
  render () {
    return (
      <div className='test'>
        Projects
        {this.props.children}
      </div>
    )
  }
}
