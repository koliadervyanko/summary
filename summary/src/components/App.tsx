import React, { FC } from "react";
import Nav from "./Nav/Nav";
import Main from "./MainInfo/Main";
import Summary from "./Summary/Summary";
import SAE from "./SkillsAndExperience/SAE";

const App: FC = () => {
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
      <Summary></Summary>
      <SAE></SAE>
    </div>
  );
};

export default App;
