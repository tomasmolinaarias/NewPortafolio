import React from "react";
import { ProjectItem } from "../components/ProjectItem";

import "../Style/Projects.css";
import { ProjectList } from "../helpers/Proyectlist";

function Projects() {
  return (
    <div className="proyects">
      <h1>Mis Proyectos</h1>
      <div className="proyeclist">
        {ProjectList.map((e, idx) => {
          return <ProjectItem id={idx} name={e.name} image={e.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
