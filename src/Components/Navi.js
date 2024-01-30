import React, { Component } from 'react'
import '../styles/Navi.css'

export default class Navi extends Component {
  render() {
    return (
      <div>   
        <nav className='navbar'>
        <ul className='navbar-items'>
            <li><a href="#">LOGO</a></li>
            <li></li>
            <li><a href="#">Hakkımızda</a></li>
            <li>
              <a href="#">Hizmetler</a>
             {/*  <ul>
                <li><a href="#">Web Tasarım</a></li>
                <li><a href="#">Grafik Tasarım</a></li>
                <li><a href="#">SEO</a></li>
            </ul>
            */}
            </li>
            <li><a href="#">İletişim</a></li>
        </ul>
        </nav>
      </div>
    )
  }
}
