import React, { FC } from "react";
import "./TT.scss";
import "./Media.scss";
import Items from "./Items/Items";

const TT: FC = () => {
  return (
    <div>
      <h2 className="TTH">Test Types</h2>
      <Items />
    </div>
  );
};

export default TT;
