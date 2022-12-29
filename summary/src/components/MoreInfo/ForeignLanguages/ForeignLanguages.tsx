import React, { FC } from "react";
import "./ForeignLanguages.scss";
import "./Media.scss";
import Svg from "./Svg";

const ForeignLanguages: FC = () => {
  return (
    <div>
      <h1>FOREIGN LANGUAGES</h1>
      <Svg />
      <p className="bold">Upper</p>
      <p className="bold">Intermidate</p>
    </div>
  );
};

export default ForeignLanguages;
