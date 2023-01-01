import React, { FC } from "react";
import "./Methodologies.scss";
import Items from "./Items/Items";
import "./MethodologiesMedia.scss";

const Methodologies: FC = () => {
  return (
    <div>
      <h2 className="MH">Methodologies</h2>
      <Items></Items>
    </div>
  );
};

export default Methodologies;
