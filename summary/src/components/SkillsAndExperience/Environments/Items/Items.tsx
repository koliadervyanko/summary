import React, { FC } from "react";
import "./Item.scss";
import "./Media.scss";

const Items: FC = () => {
  return (
    <div>
      {/* Windows /2003/2008/2012/2014/2016/core/7/8/10 */}
      <p className="skill-1 skill windows">
        Windows / 2003 / 2008 / 2012 / 2014 / 2016 / core / 7 / 8 / 10
      </p>
      <p className="year-1 year">6</p>
      <p className="proficiency-1 proficiency">Expert</p>

      {/* Linux Mandriva/Ubuntu/Fedora */}
      <p className="skill-2 skill ILinux">CentOS, Redhat</p>
      <p className="year-2 year">4</p>
      <p className="proficiency-2 proficiency">Intermediate</p>

      {/* Mac OS */}
      <p className="skill-4 skill">Mac OS</p>
      <p className="year-4 year">0.5</p>
      <p className="proficiency-4 proficiency">Beginner</p>
    </div>
  );
};

export default Items;
