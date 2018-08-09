import React, { Component } from 'react'
import { Container, Button, Col, Row } from 'reactstrap'

export default class Header extends Component {
  styles = () => ({
    wrapper: {
      marginTop: this.props.navTopOffset,
      backgroundColor: 'red',
      padding: 20
    },
    jumbotron: {},
    button: {
      maxWidth: '240px'
    }
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Container fluid style={this.styles().jumbotron}>
          <Row>
            <Col>
              <h1 className='display-3 d-flex justify-content-center'>
                Projects
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={this.styles().button} className='ml-auto' color='outline-primary' block>Finished</Button>
            </Col>
            <Col>
              <Button style={this.styles().button} className='mr-auto' color='outline-primary' block>WIP</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
