
import React, { useState } from "react";
import './App.css';

import Header from "./components/Header";
import Resume from './components/Resume';
import Nav from './components/Nav';
import About from './components/About';
import Project from "./components/Project";
import Contact from './components/Contact';
import Footer from "./components/Footer/index";


function App() {

  const [tabs] = useState([
    { name: 'About', description: 'About me' },
    { name: 'Project', description: 'My projects' },
    { name: 'Contact', description: 'Ways of contact' },
    { name: 'Resume', description: 'My resume' }
  ]);

	const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [selectedTab, setSelectedTab] = useState(false);


	return (
		<div>
    <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        SelectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      >
    </Nav>

			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
		


				<main>
          
        {!selectedTab ? (
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
          
          
          </main>
			
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;