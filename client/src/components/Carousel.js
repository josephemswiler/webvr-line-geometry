import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import CardBasic from './CardBasic'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class Carousel extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      projects: [
        {
          id: '01',
          active: true
        },
        {
          id: '02',
          active: false
        },
        {
          id: '03',
          active: false
        },

      ]
    }
  }
  styles = () => ({
    column: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      fontSize: '20px',
      color: '#33d9b2'
    },
    numberRow: {
      paddingTop: 30
    },
    numberColumn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    active: {
      backgroundColor: '#33d9b2',
      color: '#fff',
      padding: 4,
      borderRadius: 3
    }
  })

  render () {
    return (
      <Container>
        <Row>
          <Col xs='2' style={this.styles().column}>
            <FontAwesomeIcon style={this.styles().icon} icon={['fas', 'chevron-circle-left']} />
          </Col>
          <Col xs='8' style={this.styles().column}>
            <CardBasic />
          </Col>
          <Col xs='2' style={this.styles().column}>
            <FontAwesomeIcon style={this.styles().icon} icon={['fas', 'chevron-circle-right']} />
          </Col>
        </Row>
        <Row style={this.styles().numberRow}>

          <Col xs={{ size: 8, offset: 2 }} style={this.styles().numberColumn}>
          {this.state.projects.map( (item, idx) => ( 
            item.active ?
            <Link style={this.styles().active} to='/projects' key={idx}>{item.id}</Link> :
            <Link to='projects' key={idx}>{item.id}</Link>
          ))}
          </Col>
        </Row>
      </Container>
    )
  }
}
