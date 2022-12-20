import React from "react";
import "./Item.scss";

const Items = () => {
  return (
    <div>
      {/* .NET Framework */}
      <p className="M1 M">.NET Framework</p>
      <p className="MY1 MY">6</p>
      <p className="MP1 MP">Intermediate</p>

      {/* Java SDK */}
      <p className="M2 M">Java SDK</p>
      <p className="MY2 MY">1</p>
      <p className="MP2 MP">Beginner</p>

      {/* IOS SDK */}
      <p className="M4 M">IOS SDK</p>
      <p className="MY4 MY">0.5</p>
      <p className="MP4 MP">Beginner</p>

      {/* Android SDK */}
      <p className="M4 M">Android SDK</p>
      <p className="MY4 MY">0.5</p>
      <p className="MP4 MP">Beginner</p>
    </div>
  );
};

export default Items;
