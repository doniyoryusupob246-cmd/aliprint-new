import './App.css';
import Aksessuarlar from './components/Aksessuarlar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Poligrafiya from './components/Poligrafiya';
import TashqiReklama from './components/TashqiReklama';
import Maps from './components/Maps';
import Footer from './components/Footer';

function App({ poligrafiya, tashqiRekalama, aksessuarlar }) {
  return (
    <div className="App">
      <Navbar
        poligrafiya={poligrafiya}
        tashqiRekalama={tashqiRekalama}
        aksessuarlar={aksessuarlar}
      />
      <Header />
      <Poligrafiya poligrafiya={poligrafiya} />
      <TashqiReklama tashqiRekalama={tashqiRekalama} />
      <Aksessuarlar aksessuarlar={aksessuarlar} />
      <Partners />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
