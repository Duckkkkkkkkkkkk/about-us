import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Aboutus />
    </div>
  );
}

export default App;
