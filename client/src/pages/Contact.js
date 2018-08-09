import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div className='test'>
        Contact
        {this.props.children}
      </div>
    )
  }
}
