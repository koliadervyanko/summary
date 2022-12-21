import React from "react";
import "./Item.scss";

const Items = () => {
  return (
    <div>
      {/* V-Model */}
      <p className="M1 M">V-Model</p>
      <p className="MY1 MY">1.5</p>
      <p className="MP1 MP">Intermediate</p>

      {/* Waterfall model */}
      <p className="M2 M">Waterfall model</p>
      <p className="MY2 MY">2</p>
      <p className="MP2 MP">Intermediate</p>

      {/* Agile Software Development */}
      <p className="M3 M ASD">Agile Software Development</p>
      <p className="MY3 MY ASD_Y">4</p>
      <p className="MP3 MP ASD_P">Expert</p>

      {/* Spiral model */}
      <p className="M4 M">Spiral model</p>
      <p className="MY4 MY">1.5</p>
      <p className="MP4 MP">Intermediate</p>
    </div>
  );
};

export default Items;
