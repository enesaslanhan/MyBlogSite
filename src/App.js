import "./App.css";
import Navi from "./Components/Navi";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Activities from "./Components/Activities";
import communication from "./Components/communication";

function App() {
  return (
    <div>
      <Navi />
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route path="/activities" Component={Activities}/>
          <Route path="/communication" Component={communication}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
