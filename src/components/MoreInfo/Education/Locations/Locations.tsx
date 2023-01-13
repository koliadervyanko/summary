import React, { FC } from "react"
import "./Locations.scss"
import "./Media.scss"

const Locations: FC = () => {
  return (
    <>
      <p className="bold loc1">
        Manufacturing of Electronic Media, Specialist, 2008
      </p>
      <p className="normal locName1">
        National University of Radio Electronics, Kharkov, Ukraine
      </p>

      <p className="bold loc2">
        Automation of Banking Systems and their Management, Specialist, 2010
      </p>
      <p className="normal locName2">
        National University of Radio Electronics, Kharkov, Ukraine
      </p>
    </>
  )
}

export default Locations
