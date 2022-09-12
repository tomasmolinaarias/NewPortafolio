import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/Proyectlist";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../Style/ProjectDisplay.css";
export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
};
