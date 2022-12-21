import React, { FC } from "react";
import "./Summary.scss";
import Info from "./Info";
import "./Media.scss";

const Summary: FC = () => {
  return (
    <div>
      <h1 id="summary">Summary</h1>
      <Info></Info>
    </div>
  );
};

export default Summary;
