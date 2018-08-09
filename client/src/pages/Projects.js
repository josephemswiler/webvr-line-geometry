import React, { Component } from 'react'
import API from '../utils/API'
import { Container, Col, Row } from 'reactstrap'

export default class Projects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      title: '',
      author: '',
      synopsis: ''
    }
  }

  componentDidMount () {
    this.loadProjects()
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}
