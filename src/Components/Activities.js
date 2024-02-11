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
              <h1 className='A_Title'>Eczane-E-Commerce-Angular</h1>
              <p>Eczane-E-Commerce ile yapılan projenin Front-End kısmıdır.<br></br> Angular ile yapılmıştır.<br></br>
                Amaç ihtiyaç duyulan, kremler, şampuanlar, bebek bezleri vb gibi ürünleri tedarik edebilmek.<br></br>
                Kullanıcılar sisteme kayıt olduktan sonra istedikleri ürünleri sepetlerine koyabilirler.   
              </p>
              <a className='link' target='_blank' href='https://github.com/enesaslanhan/Eczane-E-Commerce-Angular'>Projenin Kodlarını Görmek İçin Tıklayınız</a>
            </div>
          </div>
          <div className='B_Box'>
          <img className="A_img"src={jpg5}></img>
          <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Proje 2</h1>
              <p>Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
             
              </p>
              
            </div>

          </div>
          
        </div>
        <div className='A_Column'>
          <div className='A_Box'>
            <img className='A_img' src={jpg4}></img>
            <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Proje 1</h1>
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
          <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Proje 2</h1>
              <p>Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
              Onion Architecture ile yapılan projenin Front-End kısmıdır. Angular ile yapılmıştır. Material kullanılmıştır.
             
              </p>
              
            </div>

          </div>
          
        </div>
      </div>
    )
  }
}
