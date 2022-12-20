import React from "react";
import "./Item.scss";

const Items = () => {
  return (
    <div>
      {/* MySQL */}
      <p className="M4 M">MySQL</p>
      <p className="MY4 MY">1</p>
      <p className="MP4 MP">Beginner</p>

      {/* MS SQL Server 2008 /2010/2012/2014/2016 */}
      <p className="M4 M M1 IMSS">
        MS SQL Server 2008 / 2010 / 2012 / 2014 / 2016
      </p>
      <p className="MY4 MY">4</p>
      <p className="MP4 MP">Expert</p>
    </div>
  );
};

export default Items;
