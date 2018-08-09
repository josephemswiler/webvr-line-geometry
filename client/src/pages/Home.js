import React, { Component } from 'react'
import Header from '../components/Header'

export default class Home extends Component {

  styles = {
    wrapper: {
      color: 'red',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      width: '100vw',
      height: '100vh'
    }
  }

  render () {
    return (
      <div style={this.styles.wrapper}>
        <Header />
      </div>
    )
  }
}
