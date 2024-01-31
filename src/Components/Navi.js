import React, { Component } from 'react'
import '../styles/Navi.css'
import { Link } from 'react-router-dom'
export default class Navi extends Component {
  render() {
    return (
      <div>   
        <nav className='navbar'>
        <ul className='navbar-items'>
            <li><a href="#">LOGO</a></li>
            <li></li>
            <li><a >Hakkımızda</a></li>
            <li>
              <Link to='/activities'>Hizmetler</Link>
            </li>
            <li><a href="#">İletişim</a></li>
        </ul>
        </nav>
      </div>
    )
  }
}
