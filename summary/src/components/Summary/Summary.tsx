import React, { FC } from "react";
import "./Summary.scss";
import Info from "./Info";
import "./Media.scss";
import Svg from "./Svg";

const Summary: FC = () => {
  return (
    <div>
      <h1 id="summary">Summary</h1>
      <Svg />
      <Info></Info>
    </div>
  );
};

export default Summary;
