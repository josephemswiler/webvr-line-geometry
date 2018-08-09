import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import ButtonBasic from './ButtonBasic'

export default class Header extends Component {
  styles = () => ({
    wrapper: {
      marginTop: this.props.navTopOffset,
      padding: 20,
      alignContent: 'center',
      justifyContent: 'center'
    },
    jumbotron: {
      width: '100%',
      height: '100%'
    }
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Container fluid style={this.styles().jumbotron}>
          <Row>
            <Col>
              <h1 className='display-3 d-flex justify-content-center text-white'>
                Hello world.
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonBasic alignment='ml-auto' text='Projects' />
            </Col>
            <Col>
              <ButtonBasic alignment='mr-auto' text='WIP' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
