import React from 'react'
import { NavLink } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'
import './Header.css'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<Menu isOpen={ false } >
  			 <NavLink exact activeStyle={{color:'red'}} to="/" className="menu-item" >Home</NavLink>
  			 <NavLink activeStyle={{color:'red'}} to="/about" className="menu-item">About</NavLink>
  			 <NavLink activeStyle={{color:'red'}} to="/Contact" className="menu-item">Contact</NavLink>
			</Menu>
    );
  }
}
