import './App.css';
import Navi from './Navi';
import jpg1 from './1.jpg';
import jpg2 from './2.jpg';


function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <div className="resim1"><img src={jpg1}></img></div>
      <div className='profilİnformation'>
        <p className='information'>Ben Enes Aslanhan Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Konya Teknik Üniversitesin'de eğitim almaktayım.<br></br>
          Kendimi Full stack web devoleper olarak geliştirmekteyim. Bildiğim Ve kullandığım teknolojiler;<br></br>
          C# - Angular - React - Html - Css - JavaScript - TypeScript - MssSql - N-Tier Architecture - Onion Architecture - Java
        </p>     
      </div>
      <div className='resim1'><img src={jpg2}></img></div>
      <div className='experience'>
        <h1 className='title'>Deneyim</h1>
        <p className='information'>
          2021-2022 Yaz stajımı Türkiye Finans Katılım Bankasın'da Ödeme Sistemleri Departmanında yaptım.<br></br>
          2022-2023 Yaz stajımı Türkiye Finans Katılım Bankasın'da Kurumsal Krediler Departmanında yaptım.
        </p>
      </div>


    </div>
  );
}

export default App;

