import React from "react";
import "./Nav.scss";

function Nav() {
  const url =
    "https://media.licdn.com/dms/image/C4D03AQGmyV2YoDsJHg/profile-displayphoto-shrink_800_800/0/1606809260685?e=2147483647&v=beta&t=BWzH9M6bWmPExfHMwKBMtNEDfPIcqhxTxeRvCVqUc7I";
  return (
    <div className="container">
      <div className="headerContainer">
        <div className="headerBody">
          <a href="" className="headerLogo">
            <img src={url} alt="fsafdsafs" />
          </a>
          <div className="headerBurger">
            <span></span>
          </div>
          <nav className="headerMenu">
            <ul className="headerLink">
              <li className="about">
                <a href="">О мне</a>
              </li>
              <li>
                <a href="">Преимущества</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
