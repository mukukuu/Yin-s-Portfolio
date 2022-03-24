
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

  const [Tabs] = useState([
    { name: 'About', description: 'About me' },
    { name: 'Project', description: 'My projects' },
    { name: 'Contact', description: 'Ways of contact' },
    { name: 'Resume', description: 'My resume' }
  ]);

	const [currentTab, setCurrentTab] = useState(Tabs[0]);
  const [SelectedTab, setSelectedTab] = useState(false);


	return (
		<div>
    <Nav
        Tabs={Tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        SelectedTab={SelectedTab}
        setSelectedTab={setSelectedTab}
      >
    </Nav>

			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
		


				<main>
          
        {!SelectedTab ? (
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