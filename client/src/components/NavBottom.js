import React, { Component } from 'react';

export default class NavBottom extends Component {
  render() {
    return (
      <div className="navbottom">
        { this.props.children }
      </div>
    )
  }
}
