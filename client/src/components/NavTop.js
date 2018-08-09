import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  styles = () => ({
      navbar: {
        justifyContent: 'center',
        alignContent: 'center'
      },
      brand: {
        position: 'absolute',
      }
  })

  render () {
    return (
      <div>
        <Navbar style={this.styles().navbar} color='light' light expand='md'>
          <NavbarBrand style={this.styles().brand} href='/'>Joseph Emswiler</NavbarBrand>
          <NavbarToggler className='mr-auto' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/home/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/projects/'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about/'>About</NavLink>
              </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
