import React from "react";
import "./SAE.scss";
import Methodologies from "./Methodologies/Methodologies";
import TT from "./Test Types/TT";
import Languages from "./Languages/Languages";
import FL from "./Frameworks/FL";
import Environments from "./Environments/Environments";
import Databases from "./Databases/Databases";
import Tools from "./Tools/Tools";

const SAE = () => {
  return (
    <div>
      <h1 id="SAE">SKILLS AND EXPERIENCE</h1>
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
      <TT></TT>
      <hr className="hr" />
      <Languages />
      <hr className="hr" />
      <FL />
      <hr className="hr" />
      <Environments />
      <hr className="hr" />
      <Databases />
      <hr className="hr" />
      <Tools />
    </div>
  );
};

export default SAE;
