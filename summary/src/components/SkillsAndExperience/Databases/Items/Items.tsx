import React from "react";
import "./Item.scss";
import "./Media.scss";

const Items = () => {
  return (
    <div>
      {/* MS SQL Server 2008 /2010/2012/2014/2016 */}
      <p className="skill-4 skill skill-1 ms-sql-server">
        MS SQL Server 2008 / 2010 / 2012 / 2014 / 2016
      </p>
      <p className="year-4 year">4</p>
      <p className="proficiency-4 proficiency">Expert</p>

      <p className="skill-4 skill">Elastic Search</p>
      <p className="year-4 year">4</p>
      <p className="proficiency-4 proficiency">Intermediate</p>

      {/* MySQL */}
      <p className="skill-4 skill">MySQL</p>
      <p className="year-4 year">1</p>
      <p className="proficiency-4 proficiency">Beginner</p>
    </div>
  );
};

export default Items;
