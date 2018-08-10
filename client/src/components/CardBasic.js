import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import ButtonBasic from './ButtonBasic'

export default class CardBasic extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  styles = () => ({
    card: {
      border: 'none',
      backgroundColor: '#eee'
    },
    cardBody: {
      padding: 20
    },
    button: {
      margin: 20
    }
  })

  render () {
    return (
      <Card style={this.styles().card}>
        <CardBody>
          <CardTitle>Jello</CardTitle>
          <CardSubtitle>June 2018</CardSubtitle>
        </CardBody>
        <img
          width='100%'
          src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
          alt='Project image'
        />
        <CardBody style={this.styles().cardBody}>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <ButtonBasic style={this.styles().button} alignment='mx-auto' text='View' color='#333' />
          </Link>
        </CardBody>
        
      </Card>
    )
  }
}
