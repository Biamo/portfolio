import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Header.scss'

const Header = () => (
<Menu>
  <Link to="/" className="menu-item">Home</Link>
  <Link to="/About" className="menu-item">About</Link>
  <Link to="/Contact" className="menu-item">Contact</Link>
</Menu>
)

export default Header
