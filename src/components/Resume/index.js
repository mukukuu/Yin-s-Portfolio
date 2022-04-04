import React from 'react';

const Resume = () => {
    return (
        <div className="color-1 p-3">
            <div>
                <h2 className="black-background p-3 inline-block">Resume</h2>
            </div>
            
            <div>
                <h3 className="p-3 black-background inline-block">Front-end Skills</h3>
            </div>
            <div>
                <ul className="no-list-style black-background p-3 inline-block">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>BootStrap</li>
                    <li>Bulma</li>
                    <li>JQuery</li>
                    <li>JSON</li>
                </ul>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Back-end Skills</h3>
            </div>
            <div>
                <ul className="no-list-style black-background p-3 inline-block">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Work Experience</h3>
            </div>
            <div>
                <p className="p-3 black-background inline-block">Software Developer since Septemper 2021</p>
            </div>
        
            

        </div>
    );
}

export default Resume;