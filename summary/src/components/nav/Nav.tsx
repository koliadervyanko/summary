import React, { FC } from "react";
import "./Nav.scss";

const Nav: FC = () => {
  const url: string =
    "https://media.licdn.com/dms/image/C4D03AQGmyV2YoDsJHg/profile-displayphoto-shrink_800_800/0/1606809260685?e=2147483647&v=beta&t=BWzH9M6bWmPExfHMwKBMtNEDfPIcqhxTxeRvCVqUc7I";
  return (
    <div>
      <div className="container">
        <div className="headerBody">
          <a href="" className="headerLogo">
            {/* <img src={url} alt="fsafdsafs" /> */}
          </a>
          <div className="headerBurger">
            <span></span>
          </div>
          <nav className="headerMenu">
            <ul>
              <li>
                <a href="#" className="about">
                  О мне
                </a>
              </li>
              <li>
                <a href="#">Преимущества</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
