import React, { Component } from 'react'
import '../styles/Navi.css'
import { Link } from 'react-router-dom'
export default class Navi extends Component {
  render() {
    return (
      <div>   
        <nav className='navbar'>
        <ul className='navbar-items'>
            <li><a href="#" className='a_name'>Enes Aslanhan</a></li>
            <li></li>
            <li><Link to='/'>Hakkımızda</Link></li>
            <li>
              <Link to='/activities'>Hizmetler</Link>
            </li>
            <li><Link to='/communication'>İletişim</Link></li>
        </ul>
        </nav>
      </div>
    )
  }
}
