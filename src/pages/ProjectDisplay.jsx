import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/Proyectlist";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Style/ProjectDisplay.css";
import "../Style/Projects.css";
export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.url}>
        <img src={project.image} alt="Projecto" />
      </a>

      <p>
        <b>Tecnologias:</b>

        {project.skills}
      </p>
      <a href={project.github}>
        <GitHubIcon />
      </a>
    </div>
  );
};
