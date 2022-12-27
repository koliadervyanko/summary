import React, { FC } from "react";

interface ICardProps {
  text: any;
  span: any;
  class: any;
}

const Card: FC<ICardProps> = (props) => {
  return (
    <div>
      <p className={props.class}>
        <span>{props.span}</span>
        {props.text}
      </p>
    </div>
  );
};

export default Card;
