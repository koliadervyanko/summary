import React, { FC } from "react";
import "./Item.scss";
import "./Media.scss";
import Card from "../../Card";
import items from "./Item";

const Items: FC = () => {
  const content: any = items.map((item, index) => {
    return (
      <Card
        year={item.year}
        yearClass={item.yearClass}
        haeding={item.heading}
        proficiency={item.proficiency}
        haedingClass={item.haedingClass}
        proficiencyClass={item.proficiencyClass}
        key={index}
      />
    );
  });
  return <div>{content}</div>;
};

export default Items;
