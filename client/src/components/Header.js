import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import ButtonBasic from './ButtonBasic'
import { Link } from 'react-router-dom'

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
    },
    headerTitle: {
      color: '#777'
    }
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Container fluid style={this.styles().jumbotron}>
          <Row>
            <Col>
              <h1 style={this.styles().headerTitle} className='display-3 d-flex justify-content-center'>
                Hello world.
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to='/projects' style={{ textDecoration: 'none' }}><ButtonBasic alignment='ml-auto' text='Projects' color='#777' /></Link>
            </Col>
            <Col>
              <ButtonBasic alignment='mr-auto' text='WIP' color='#777' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
