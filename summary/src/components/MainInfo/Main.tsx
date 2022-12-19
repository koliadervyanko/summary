import React, { FC } from "react";
import "./Main.scss";
import Info from "./Info";
import "./MainMedia.scss";

const Main: FC = () => {
  const url: string =
    "https://media.licdn.com/dms/image/C4D03AQGmyV2YoDsJHg/profile-displayphoto-shrink_800_800/0/1606809260685?e=2147483647&v=beta&t=BWzH9M6bWmPExfHMwKBMtNEDfPIcqhxTxeRvCVqUc7I";
  return (
    <div>
      <h1>Derevyanko Michail CV</h1>
      <img src={url} alt="Mykhail" width="700px" height="auto" />
      <Info></Info>
    </div>
  );
};

export default Main;
