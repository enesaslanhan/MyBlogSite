import './App.css';
import Navi from './Navi';
import exampleImage from './1.jpg';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <div className="resim1"><img src={exampleImage}></img></div>
      <div className='profilİnformation'>
        <p>Ben Enes Aslanhan Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Konya Teknik Üniversitesin'de eğitim almaktayım.
           
        </p>
      </div>
    </div>
  );
}

export default App;
