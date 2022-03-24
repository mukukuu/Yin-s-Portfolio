import React, {useState} from 'react';
import Project from '../../components/Project';

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
            name: "Bored & brews",
            technologies: "HTML/CSS/JavaScript",
        },
        
    ]);

    return (
        <div>
            <Project projects={projects}/>
        </div>
    );
}

export default Portfolio;