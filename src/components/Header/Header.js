import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Header extends React.Component {

render() {
    return (
      <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">React-Bootstrap</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
         <NavItem eventKey={1} href="/">Home</NavItem>
       <NavItem eventKey={2} href="/about">About</NavItem>
     <NavItem eventKey={3} href="/contact">contact</NavItem>
       </Nav>
     </Navbar>

  )

}

}
