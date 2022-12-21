import React, { FC } from "react";
import "./DomainAreas.scss";

const DomainAreas: FC = () => {
  return (
    <div>
      <h1>DOMAIN AREAS</h1>
      <p className="normal">
        Digital system (data archving) -
        <span className="bold bold1">Expert</span>
      </p>
      <p className="normal">
        Social Networks -<span className="bold bold1">Intermediate</span>
      </p>
      <p className="normal IC">
        Internet commercials (Internet shop) -
        <span className="bold bold1">Intermediate</span>
      </p>
      <p className="normal">
        Advertising -<span className="bold bold1">Beginner</span>
      </p>
      <p className="normal">
        Information Security -<span className="bold bold1">Beginner</span>
      </p>
    </div>
  );
};

export default DomainAreas;
