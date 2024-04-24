import './App.css';
import Aboutus from './components/aboutus/Aboutus';
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
    </div>
  );
}

export default App;
