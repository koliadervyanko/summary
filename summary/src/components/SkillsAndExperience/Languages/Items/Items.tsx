import React from "react";
import "./Item.scss";

const Items = () => {
  return (
    <div>
      {/* C# */}
      <p className="M1 M">C#</p>
      <p className="MY1 MY">6</p>
      <p className="MP1 MP">Intermediate</p>

      {/* Java */}
      <p className="M2 M">Java</p>
      <p className="MY2 MY">0.5</p>
      <p className="MP2 MP">Beginner</p>

      {/* PHP */}
      <p className="M3 M">PHP</p>
      <p className="MY3 MY">0.5</p>
      <p className="MP3 MP">Beginner</p>

      {/* Java Script */}
      <p className="M4 M">Java Script</p>
      <p className="MY4 MY">0.5</p>
      <p className="MP4 MP">Beginner</p>

      {/* XML */}
      <p className="M4 M">XML</p>
      <p className="MY4 MY">6</p>
      <p className="MP4 MP">Expert</p>

      {/* SQL */}
      <p className="M4 M">SQL</p>
      <p className="MY4 MY">6</p>
      <p className="MP4 MP">Expert</p>
    </div>
  );
};

export default Items;
