import React from "react";
import "./SAE.scss";
import Methodologies from "./Methodologies/Methodologies";
import TT from "./Test Types/TT";
import Languages from "./Languages/Languages";
import F from "./Frameworks/FL";
import Environments from "./Environments/Environments";
import Databases from "./Databases/Databases";
import Tools from "./Tools/Tools";
import FL from "./FL/FL";
import VersoinControlSystem from "./VersoinControlSystem/VersoinControlSystem";
import ProjectManagmentTools from "./ProjectManagmentTools/ProjectManagmentTools";
import Svg from "./Svg";

const SAE = () => {
  return (
    <div>
      <h1 id="SAE">SKILLS AND EXPERIENCE</h1>
      <Svg />
      <div className="properties">
        <p className="proficiency">Proficiency</p>

        <p className="years">Years</p>
        <br />
        <div>
          <hr className="hr" />
        </div>
      </div>
      <Methodologies />
      <hr className="hr" />
      <TT />
      <hr className="hr" />
      <Languages />
      <hr className="hr" />
      <F />
      <hr className="hr" />
      <Environments />
      <hr className="hr" />
      <Databases />
      <hr className="hr" />
      <Tools />
      <hr className="hr" />
      <FL />
      <hr className="hr" />
      <VersoinControlSystem />
      <hr className="hr" />
      <ProjectManagmentTools />
    </div>
  );
};

export default SAE;
