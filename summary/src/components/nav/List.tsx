import React from "react";
import Summary from "../Summary/Summary";
import SAE from "../SkillsAndExperience/SAE";

function List() {
  return (
    <div>
      <div className="list">
        <ul>
          <li>
            <a href="#summary">SUMMARY</a>
          </li>
          <li>
            <a href="#SAE">SKILLS</a>
          </li>
          <li>
            <a href="#">MORE INFORMATION</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
