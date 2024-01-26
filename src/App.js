import './App.css';
import Navi from './Navi';
import exampleImage from './1.jpg';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <div className="resim1"><img src={exampleImage}></img></div>
      <div className='profilİnformation'>
        <p className='information'>Ben Enes Aslanhan Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Konya Teknik Üniversitesin'de eğitim almaktayım.<br></br>
          Kendimi Full stack web devoleper olarakgeliştirmekteyim.Bildiğim Ve kullandığım teknolojiler;<br></br>
          C# - Angular - React - Html - Css - JavaScript - TypeScript - MssSql - N-Tier Architecture - Onion Architecture - Java
        </p>     
      </div>
      
    </div>
  );
}

export default App;

