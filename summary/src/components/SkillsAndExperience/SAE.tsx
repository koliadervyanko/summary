import React from "react";
import "./SAE.scss";
import Methodologies from "./Methodologies/Methodologies";
import TT from "./Test Types/TT";

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
    </div>
  );
};

export default SAE;
