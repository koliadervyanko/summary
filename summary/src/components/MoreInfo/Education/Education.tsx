import React, { FC } from "react";
import Locations from "./Locations/Locations";
import "./Education.scss";

const Education: FC = () => {
  return (
    <div>
      <h1 className="EH" id="MF">
        EDUCATION
      </h1>
      <Locations />
    </div>
  );
};

export default Education;
