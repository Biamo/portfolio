import React from 'react'
import { Link } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'
import './Header.scss'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Menu>
  			<Link to="/" className="menu-item" >Home</Link>
  			<Link to="/About" className="menu-item">About</Link>
  			<Link to="/Contact" className="menu-item">Contact</Link>
			</Menu>
    );
  }
}
