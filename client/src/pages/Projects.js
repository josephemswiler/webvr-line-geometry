import React, { Component } from 'react'
// import API from '../utils/API'
import { Container, Col, Row } from 'reactstrap'
import CardBasic from '../components/CardBasic'
import Carousel from '../components/Carousel'

export default class Projects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [1, 2, 3, 4, 5, 6],
      navTopOffset: 92,
      currentWindowHeight: window.innerHeight,
      selectedProject: null
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
    // this.loadProjects()
  }

  windowResize = () => {
    this.setState({
      currentWindowHeight: window.innerHeight
    })
  }

  // loadProjects = () => {
  //   API.getProjects()
  //     .then(res => console.log(res.data)) //this.setState({ projects: res.data }))
  //     .catch(err => console.log(err))
  // }

  styles = () => ({
    wrapper: {
      width: '100vw',
      height: this.state.currentWindowHeight - this.state.navTopOffset,
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: this.state.navTopOffset
    },
    scrollRow: {
      height: '100%'
    }
  })

  render () {
    return (
      <Container style={this.styles().wrapper}>
        <Row style={this.styles().scrollRow}>
          <Col style={this.styles().scrollRow}>
            <Carousel />
            {/* {this.state.projects.map( (item, idx) => (
              <CardBasic title={item} subtitle='June 2018' key={idx} />
            ))} */}
          </Col>
        </Row>
      </Container>
    )
  }
}
