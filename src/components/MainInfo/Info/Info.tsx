import React, { FC } from "react"
import Card from "./Card"
import items from "./Content"

const Info = () => {
  const conent = items.map((item, index) => {
    return (
      <Card text={item.text} span={item.span} class={item.class} key={index} />
    )
  })
  return <div className="info">{conent}</div>
}

export default Info
