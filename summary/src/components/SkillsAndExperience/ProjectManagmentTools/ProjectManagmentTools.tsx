import React, { FC } from "react";
import Items from "./Items/Items";
import "./Media.scss";

const ProjectManagmentTools: FC = () => {
  return (
    <div>
      <h2 className="LH">Project Managment Tools</h2>
      <Items />
    </div>
  );
};

export default ProjectManagmentTools;
