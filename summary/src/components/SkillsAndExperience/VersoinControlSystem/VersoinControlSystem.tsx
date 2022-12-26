import React, { FC } from "react";
import Items from "./Items/Items";
import "./Media.scss";

const VersoinControlSystem: FC = () => {
  return (
    <div>
      <h2 className="LH">Versoin Control System</h2>
      <Items />
    </div>
  );
};

export default VersoinControlSystem;
