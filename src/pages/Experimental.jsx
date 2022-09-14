import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { experencia } from "../helpers/experencie";
import "../Style/experience.css";
export const Experimental = () => {
  return (
    <div className="experience">
      {/* EDUCACION */}

      <VerticalTimeline lineColor="#3e497a">
        {experencia.map((e) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={e.fecha}
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{e.lugar}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.estudio}</h4>
            <h4 className="vertical-timeline-element-text">Dipoma</h4>
            <a href={e.diploma} target="blank">
              <button className="btnEx">VER</button>
            </a>
          </VerticalTimelineElement>
        ))}
        {/* trabajo */}

        {/*         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">TRabajop</h3>
          <p>descripcion</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};
