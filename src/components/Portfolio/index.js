
import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 0,
    title: "Chorezy",
    languages: "react, jsx, css, js",
    packages: "MongDB, Heroku, apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/chorezy.png",
    description: "Allows you to build a admin acount to create child account, the admin can create and assign a task to a child for them to view on child profile.!",
    repo: "https://github.com/Nnavarr/Chorezy",
    live: "https://chorezy2.herokuapp.com/",
  },

  {
    id: 1,
    title: "Runbuddy",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/runbuddy.png",
    description: "Allows you to find a coach and a personal trainer!",
    repo: "https://github.com/mukukuu/run-buddy",
    live: "https://mukukuu.github.io/run-buddy/",
  },


  {
    id: 2,
    title: "Lost Pet App",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/dog.png",
    description: "A basic app that allows you to report lost pets.",
    repo: "https://github.com/EmilyNecciai/tech-topics",
    live: "https://lost-pet-app-project.herokuapp.com/",
  },
  {
    id: 3,
    title: "Bored&Brews",
    languages: "html, css, js, handlebars",
    packages: "bootstrap",
    image: "/img/Bored&Brews.png",
    description: "Allows you to find breweries and bar by city!",
    live: "https://fmatthew40.github.io/bored-and-brews/",
    repo: "https://github.com/EmilyNecciai/quizam",
  },
 {
   id: 4,
   title: "Horiseon",
   languages: "html, css, js",
   image: "/img/Horiseon.png",
   packages: "none",
   description: "Gives you a recommendation for social media, Online Reputation managemant and Serch Engine Optimazation.",
   repo: "https://github.com/mukukuu/Horiseon",
   live: "https://mukukuu.github.io/Horiseon/",
 },
  {
    id: 5,
    title: "Fan Page App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/fanpage.png",
    description: "Personal Fanpage",
    repo: "https://github.com/EmilyNecciai/duly-noted",
    live: "https://mukukuu.github.io/Souad/",
  },
 {
   id: 6,
   title: "Scheduler",
   languages: "html, css",
   packages: "none",
   image: "/img/Scheduler.png",
   description: "A basic work scheduler for daily use.",
   repo: "https://github.com/mukukuu/scheduler",
   live: "N/A",
 },
   {
     id: 7,
     title: "Tree-Hole",
     languages: "html, css, js",
     packages: "none",
     image: "/img/Tree-Hole.png",
     description: "A basic app that allows you to log in and post chech questions for other users to response.",
     repo: "https://github.com/mukukuu/Tree-hole",
     live: "https://treehole2022.herokuapp.com/",
 },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">List of Projects</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;