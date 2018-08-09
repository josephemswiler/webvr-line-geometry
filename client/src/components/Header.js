import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

export default class Header extends Component {
  styles = () => ({
    wrapper: {
      marginTop: this.props.navTopOffset,
      padding: 20,
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    jumbotron: {
      width: '100%',
      height: '100%'
    },
    headerTitle: {
      color: '#333',
      fontSize: '7vw'
    }
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Container fluid style={this.styles().jumbotron}>
          <Row>
            <Col>
              <h1 style={this.styles().headerTitle} className='d-flex justify-content-center'>
                {this.props.title}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
