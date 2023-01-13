import React, { FC } from "react"
import Locations from "./Locations/Locations"
import Svg from "./Svg"

import "./WE.scss"
import "./Media.scss"

const WE: FC = () => {
  return (
    <>
      <h1 className="EH">WORK EXPERIENCE</h1>
      <Svg />
      <Locations />
    </>
  )
}

export default WE
