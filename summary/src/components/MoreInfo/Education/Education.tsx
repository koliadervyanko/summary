import React, { FC } from "react";
import Locations from "./Locations/Locations";
import "./Education.scss";
import Svg from "./Svg";
import "./Media.scss";

const Education: FC = () => {
  return (
    <div>
      <h1 className="EH" id="MF">
        EDUCATION
      </h1>
      <Svg />
      <Locations />
    </div>
  );
};

export default Education;
