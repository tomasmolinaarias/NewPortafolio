import React from "react";
import "../Style/Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>VICTOR MOLINA</h2>
        <div className="prompt">
          <p>FULL-STACK </p>
          <a href="https://github.com/tomasmolinaarias" target="blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/victormolinaarias"
            target="blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>TECNOLOGIA</h2>
        <ol className="list">
          <li className="item">
            <h4>Front-end</h4>
            <span>Handlebars.js, React.js, Bootstrap, HTML/CSS</span>
          </li>
          <li className="item">
            <h4>Back-end</h4>
            <span>Node.js, Express, PostgreSQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h4>Lenguages</h4>
            <span> JavaScript, Git, Github</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
