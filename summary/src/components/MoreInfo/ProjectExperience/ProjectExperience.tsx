import React, { FC } from "react";
import Items from "./Items/Items";
import Svg from "./Svg";
import "./ProjectExpirence.scss";

const ProjectExperience: FC = () => {
  return (
    <div>
      <h1 className="EH">PROJECT EXPERIENCE</h1>
      <Svg />
      <Items />
    </div>
  );
};

export default ProjectExperience;
