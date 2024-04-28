import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Freshcode from './components/freshcode/Freshcode';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import ITcorgi from './components/it-corgi/ITcorgi';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Aboutus />
      <ITcorgi />
      <Freshcode />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
