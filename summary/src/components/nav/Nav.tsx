import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#">SUMMARY</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">MORE INFORMATION</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
