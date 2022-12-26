import React, { FC } from "react";
import "./Items.scss";
import "./Media.scss";
import items from "./Content";
import Card from "../../Card";

const Items: FC = () => {
  const content = items.map((item, index) => {
    return (
      <Card
        year={item?.year}
        yearClass={item?.yearClass}
        haeding={item?.heading}
        proficiency={item?.proficiency}
        haedingClass={item?.haedingClass}
        proficiencyClass={item?.proficiencyClass}
        key={index}
      />
    );
  });
  return <div>{content}</div>;
};

export default Items;
