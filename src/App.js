import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Content from './components/Content';
import AboutMe from './components/AboutMe';
import Project from "./components/Project";
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {






  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
