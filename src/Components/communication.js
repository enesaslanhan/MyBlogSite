import React, { Component } from 'react'
import jpg1 from '../logo1.jpg';
import jpg2 from '../logo2.jpg';
import '../styles/communication.css'


export default class communication extends Component {
  render() {
    return (
      <div className='context'>
        <div className='c_box'><img className='c_image' src={jpg2}></img></div>
        <div className='c_links'>
            <h1 className='c_title'>İletişim</h1>
            <a target='_blank' href='https://github.com/enesaslanhan'>GitHub</a>
            <a target='_blank' href='https://www.linkedin.com/in/enes-aslanhan-490562230/'>linkedin</a>
            <a target='_blank' href='https://www.instagram.com/enes_aslanhann/'>İnstagram</a>
            <a target='_blank' href='https://twitter.com/Enes__Aslanhan'>Twitter</a>
        </div>
      </div>
    )
  }
}
