
import React, { useState } from "react";
 import './App.css';


import Resume from './components/Resume';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from "./components/Footer";




function App() {
  const [currentPage, handlePageChange] = useState("About");

  //  render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mukukuu"
          >
            <span className="content is-large">GitHub </span>
          </a>
        </div>
      </nav>

      <Header></Header>


      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>

    <Footer></Footer>
    </div>
  );
}

export default App;

