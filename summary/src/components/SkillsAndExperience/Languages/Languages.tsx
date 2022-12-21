import React, { FC } from "react";
import Items from "./Items/Items";
import "./Media.scss";

const Languages: FC = () => {
  return (
    <div>
      <h2 className="LH">Languages</h2>
      <Items />
    </div>
  );
};

export default Languages;
