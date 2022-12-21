import React, { FC } from "react";
import Items from "./Items/Items";
import "./TT.scss";
import "./Media.scss";

const TT: FC = () => {
  return (
    <div>
      <h2 className="TTH">Test Types</h2>
      <Items />
    </div>
  );
};

export default TT;
