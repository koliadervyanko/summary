import React, { FC } from "react";
import "./Item.scss";
import "./Media.scss";

/* TODO: make the order Ascending by  <p className="MP1 MP">Expert</p> or group by similar  */

const Items: FC = () => {
  return (
    <div>
      {/* Functional */}
      <p className="M1 M">Functional</p>
      <p className="MY1 MY">8</p>
      <p className="MP1 MP">Expert</p>

      {/* Regression */}
      <p className="M2 M">Regression</p>
      <p className="MY2 MY">8</p>
      <p className="MP2 MP">Expert</p>

      {/* Ad Hoc */}
      <p className="M3 M">Ad Hoc</p>
      <p className="MY3 MY">4</p>
      <p className="MP3 MP">Advanced</p>

      {/* Load */}
      <p className="M4 M">Load</p>
      <p className="MY4 MY">5</p>
      <p className="MP4 MP">Expert</p>

      {/* Stress */}
      <p className="M1 M">Stress</p>
      <p className="MY1 MY">5</p>
      <p className="MP1 MP">Expert</p>

      {/* Performance */}
      <p className="M2 M">Performance</p>
      <p className="MY2 MY">5</p>
      <p className="MP2 MP">Advanced</p>

      {/* Usability */}
      <p className="M3 M">Usability</p>
      <p className="MY3 MY">4</p>
      <p className="MP3 MP">Expert</p>

      {/* Compatibility */}
      <p className="M4 M">Compatibility</p>
      <p className="MY4 MY">5</p>
      <p className="MP4 MP">Expert</p>

      {/* Exploratory */}
      <p className="M3 M">Exploratory</p>
      <p className="MY3 MY">5</p>
      <p className="MP3 MP">Advanced</p>

      {/* Automated testing */}
      <p className="M4 M MAT">Automated testing</p>
      <p className="MY4 MY ">6</p>
      <p className="MP4 MP ">Advanced</p>

      {/* Scalability */}
      <p className="M1 M">Scalability</p>
      <p className="MY1 MY">3</p>
      <p className="MP1 MP">Advanced</p>

      {/* User Acceptance Testing */}
      <p className="M2 M MUAT">User Acceptance Testing</p>
      <p className="MY2 MY MUATY_Y">3</p>
      <p className="MP2 MP MUATY_P">Intermediate</p>

      {/* Security Testing */}
      <p className="M3 M ST">Security Testing</p>
      <p className="MY3 MY">1</p>
      <p className="MP3 MP">Beginner</p>

      {/* Delivery Testing */}
      <p className="M4 M DT">Delivery Testing</p>
      <p className="MY4 MY">4</p>
      <p className="MP4 MP">Expert</p>
    </div>
  );
};

export default Items;
