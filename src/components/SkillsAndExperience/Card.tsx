import React, { FC } from "react";

interface ICard {
  year: any;
  haeding: any;
  proficiency: any;
  haedingClass: any;
  proficiencyClass: any;
  yearClass: any;
}

const Card: FC<ICard> = (props) => {
  return (
    <div>
      <p className={props.haedingClass}>{props.haeding}</p>
      <p className={props.yearClass}>{props.year}</p>
      <p className={props.proficiencyClass}>{props.proficiency}</p>
    </div>
  );
};

export default Card;
