import React, { Component } from 'react'
import Header from '../components/Header'
import { Button} from 'reactstrap'

export default class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navTopOffset: 92,
      currentWindowHeight: window.innerHeight,
      color: '#fff'
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    this.setState({
      currentWindowHeight: window.innerHeight
    })
  }

  styles = () => ({
    wrapper: {
      width: '100vw',
      height: this.state.currentWindowHeight - this.state.navTopOffset,
      justifyContent: 'center',
      alignContent: 'center',
      paddingLeft: '10%',
      paddingRight: '10%',
      textAlign: 'justify'
    },
    paragraph: {
      maxWidth: '690px',
      margin: 'auto'
    }
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        <Header navTopOffset={this.state.navTopOffset} title='hello world.' />
        <div>
          <p style={this.styles().paragraph}>
            I am a full stack developer with a proficiency in UI / UX, jQuery, and advanced front-end Javascript (React.js, Next.js, Three.js). I have experience with NoSQL and SQL databases and development and consumption of RESTful APIs.
            <br />
            <br />
            When I'm not slingin' bits, I run, I cook, and I explore local breweries.
          </p>
        </div>
        <Button>Hello</Button>
      </div>
    )
  }
}
