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
              <br></br>
              <hr></hr>
              <br></br>
              <a className='link' target='_blank' href='https://github.com/enesaslanhan/Eczane-E-Commerce-Angular'>Projenin Kodlarını Görmek İçin Tıklayınız</a>
            </div>
          </div>
          <div className='B_Box'>
          <img className="A_img"src={jpg5}></img>
          <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Eczane-E-Commerce</h1>
              <p>
                Eczane E-Ticaret uygulamasının back-end tarafıdır.<br></br>
                C# N-Architecture ile tasarlanmıştır. Veritabanı işlemleri MSSQL ile yapılmıştır.<br></br>
                Hashing ve token işlemleri mevcuttur.
              </p>
              <br></br>
              <hr></hr>
              <br></br>
              <a href='https://github.com/enesaslanhan/Eczane-E-Commerce'  target='_blank' className='link'>Projenin Kodlarını Görmek İçin Tıklayınız</a>
              
            </div>

          </div>
          
        </div>
        <div className='A_Column'>
          <div className='A_Box'>
            <img className='A_img' src={jpg4}></img>
            <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Anonim Şiir Uygulaması Front-End</h1>
              <p>
                Anonim şiir uygulamasının front-end kısmıdır.<br></br>
                Angular ile yapılmıştır typescript ile yazılmıştır.Rxjs kullanımı mevcuttur.<br></br>
                Kullanıcılar sisteme anonim bir isim ile girip kendi şiirlerini paylaşığ puanlayabiliyorlar.
              </p>
              <br></br>
              <hr></hr>
              <br></br>
              <a href='https://github.com/enesaslanhan/Poem-Project-Angular'  target='_blank' className='link'>Projenin Kodlarını Görmek İçin Tıklayınız</a>
              
            </div>
          </div>
          <div className='B_Box'>
          <img className="A_img"src={jpg5}></img>
          <div className='A_Box_İnformation'>
              <h1 className='A_Title'>Anonim Şiir Uygulaması Back-End</h1>
              <p>
                Anonim şiir uygulamasının back-end tarafıdır.<br></br>
                C# N-Architecture ile tasarlanmıştır. Veritabanı işlemleri MSSQL ile yapılmıştır.<br></br>
                Veritabanına users,poems,scores ile ilgili tablolara ait CRUD işlemleri generic olarak tasarlanmıştır
                
              </p>
              <br></br>
              <hr></hr>
              <br></br>
              <a href='https://github.com/enesaslanhan/Poem-Project'  target='_blank' className='link'>Projenin Kodlarını Görmek İçin Tıklayınız</a>
            </div>

          </div>
          
        </div>
      </div>
    )
  }
}
