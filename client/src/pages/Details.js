import React, { Component } from 'react'

export default class Details extends Component {
  render () {
    return (
      <div className='test'>
        Details
        {this.props.children}
      </div>
    )
  }
}
