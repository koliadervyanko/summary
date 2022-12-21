import React, { FC } from "react";
import Items from "./Items/Items";
import "./FL.scss";

const FL: FC = () => {
  return (
    <div>
      <h2 className="FLH Foreign_Languages ">
        Foreign <br /> Languages
      </h2>

      <Items />
    </div>
  );
};

export default FL;
