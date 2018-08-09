import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Tooltip
} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class NavTop extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.tooltipToggle = this.tooltipToggle.bind(this)
    this.state = {
      isOpen: false,
      tooltipOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  tooltipToggle () {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  styles = () => ({
    navbar: {
      justifyContent: 'center',
      alignContent: 'center',
      border: 'none'
    },
    brand: {
      position: 'absolute',
      top: 27
    },
    icon: {
      fontSize: '20px'
    },
    toggler: {
      fontSize: '20px',
      outline: 'none'
    }
  })

  render () {

    let toggleIcon = this.state.isOpen ? 'angle-up' : 'angle-down'
    
    return (
      <div>
        <Navbar style={this.styles().navbar} className='transparent fixed-top' dark expand='md'>
          <Link style={this.styles().brand} className='navbar-brand' to='/'>
            Joseph Emswiler
          </Link>
          
          <NavbarToggler style={this.styles().toggler} className='mr-auto border-0' onClick={this.toggle}>
            <FontAwesomeIcon
              icon={['fas', toggleIcon]}
            />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/projects/'>Projects</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/about/'>About</Link>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink
                  href='https://github.com/josephemswiler'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    style={this.styles().icon}
                    icon={['fab', 'github']}
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.linkedin.com/in/josephemswiler/'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    style={this.styles().icon}
                    icon={['fab', 'linkedin']}
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='mailto:josephemswiler@gmail.com' target='_blank'>
                  <FontAwesomeIcon
                    style={this.styles().icon}
                    icon={['fas', 'envelope']}
                    id='email'
                  />
                  <Tooltip
                    placement='bottom'
                    isOpen={this.state.tooltipOpen}
                    target='email'
                    toggle={this.tooltipToggle}
                  >
                    JosephEmswiler@gmail.com
                  </Tooltip>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
