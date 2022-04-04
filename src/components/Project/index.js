// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";

// function Project(props) {
// 	// This imports the information for the current project sent down.
// 	const currentProject = useState(props)[0].projects;

// 	const name = currentProject.name;
// 	const description = currentProject.description;
// 	const image = currentProject.image;
// 	const techs = currentProject.technologies;
// 	const appLink = currentProject.deployed;
// 	const gitLink = currentProject.github;

// 	// This function parses the information from the array and creates a list.
// 	function getTechs(techArray) {
// 		let techList = "";

// 		for (var i = 0; i < techArray.length; i++) {
// 			if (i === techArray.length - 1) {
// 				techList += techArray[i];
// 			} else {
// 				techList += techArray[i] + ", ";
// 			}
// 		}

// 		return techList;
// 	}

// 	return (
// 		<Card style={{ width: "18rem" }}>
// 			<Card.Img
// 				variant="top"
// 				src={require(`../../assets/small/${image}`)}
// 				className="card-image"
// 			/>
// 			<div className="center">
// 				<Card.Body>
// 					<Card.Title className="card-title">{name}</Card.Title>
// 					<Card.Text className="card-text">{description}</Card.Text>
// 					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
// 					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
// 					<Card.Link href={appLink} target="_blank" className="card-link">
// 						{name} App
// 					</Card.Link>
// 					<br></br>
// 					<Card.Link href={gitLink} target="_blank" className="card-link">
// 						{name} Github
// 					</Card.Link>
// 				</Card.Body>
// 			</div>
// 		</Card>
// 	);
// }

// export default Project;

import React from "react";

function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">

              <div className="card-image">
                <figure className="image is-4by3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                  </a>
                </figure>
              </div>

              <div className="card-content">

                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />

                  <div className="content is-family-code">
                    Languages: {project.languages}
                    <br />
                    NPM Packages: {project.packages}
                  </div>

                  <div className="card">
					  
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        See the Repo!
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        See the Live Site!
                      </a>
                    </footer>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;