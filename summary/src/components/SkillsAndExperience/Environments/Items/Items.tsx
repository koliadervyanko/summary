import React from "react";
import "./Item.scss";
import "./Media.scss";

const Items = () => {
  return (
    <div>
      {/* Windows /2003/2008/2012/2014/2016/core/7/8/10 */}
      <p className="M1 M IW">
        Windows / 2003 / 2008 / 2012 / 2014 / 2016 / core / 7 / 8 / 10
      </p>
      <p className="MY1 MY">6</p>
      <p className="MP1 MP">Expert</p>

      {/* Linux Mandriva/Ubuntu/Fedora */}
      <p className="M2 M ILinux">CentOS, Redhat</p>
      <p className="MY2 MY">4</p>
      <p className="MP2 MP">Intermediate</p>

      {/* Mac OS */}
      <p className="M4 M">Mac OS</p>
      <p className="MY4 MY">0.5</p>
      <p className="MP4 MP">Beginner</p>
    </div>
  );
};

export default Items;
