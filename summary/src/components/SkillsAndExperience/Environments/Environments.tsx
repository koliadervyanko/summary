import React, { FC } from "react";
import Items from "./Items/Items";
import "./Media.scss";

const Environments: FC = () => {
  return (
    <div>
      <h2 className="FLH">Environments</h2>
      <Items />
    </div>
  );
};

export default Environments;
