import React from "react";
import "./Item.scss";
import "./Media.scss";
import Card from "../../Card";
import items from "./Content";

const Items = () => {
  const content = items.map((item, index) => {
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
