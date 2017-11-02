import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from './logo.gif';
import './Header.css'

export default class Header extends React.Component {

render() {
    return (
      <Navbar inverse>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/"><img className="header-logo" src={logo}/></a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/about">About</NavItem>
     <NavItem eventKey={3} href="/contact">Contact</NavItem>
       </Nav>
     </Navbar>

  )

}

}
