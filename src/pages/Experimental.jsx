import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
export const Experimental = () => {
  return (
    <div className="experience">
      {/* EDUCACION */}

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">estudio</h3>
          <p> Diploma</p>
        </VerticalTimelineElement>
        {/* trabajo */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">TRabajop</h3>
          <h4 className="vertical-timeline-element-subtitle">lugar o que</h4>
          <p>descripcion</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
