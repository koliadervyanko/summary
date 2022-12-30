import React, { FC } from "react";
import "./Nav.scss";
import List from "./List/List";
import "./NavMedia.scss";

const Nav: FC = () => {
  return (
    <div>
      <nav>
        <div className="navBody">
          <div className="logo">
            <a href="">MD</a>
          </div>
          <List></List>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
