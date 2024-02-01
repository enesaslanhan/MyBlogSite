import React, { Component } from 'react'
import jpg5 from '../5.jpg';
import jpg4 from '../4.jpg';
import jpg6 from '../6.jpg';
import '../styles/Activities.css'
export default class Activities extends Component {
  render() {
    return (
      <div className='A_Container'>
        <div className='A_Column'>
          <div className='A_Box'>
            <img className='A_img' src={jpg4}></img>
            <div className='A_Box_İnformation'>
              <h1>Proje 1</h1>
              <p>Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              </p>
              
            </div>
          </div>
          <div className='B_Box'>
          <img className="A_img"src={jpg5}></img>

          </div>
        </div>
      </div>
    )
  }
}
