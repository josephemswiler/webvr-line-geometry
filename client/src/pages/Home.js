import React, { Component } from 'react'
import Header from '../components/Header'

export default class Home extends Component {

  styles = () => ({
    wrapper: {
      color: 'red'
    }
})

  render () {
    return (
      <div style={this.styles().wrapper}>
      hello home
        <Header />
      </div>
    )
  }
}
