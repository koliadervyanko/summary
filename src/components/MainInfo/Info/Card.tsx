import React, { FC } from "react"

interface ICardProps {
  text: any
  span: any
  class: any
}

const Card: FC<ICardProps> = (props) => {
  return (
    <>
      <p className={props.class}>
        <span>{props.span}</span>
        {props.text}
      </p>
    </>
  )
}

export default Card
