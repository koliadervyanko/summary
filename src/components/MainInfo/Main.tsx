import React, { FC } from "react"
import "./Main.scss"
import Info from "./Info/Info"
import "./MainMedia.scss"
import Svg from "./Svg"

const Main: FC = () => {
  const url: string =
    "https://media.licdn.com/dms/image/C4D03AQGmyV2YoDsJHg/profile-displayphoto-shrink_800_800/0/1606809260685?e=2147483647&v=beta&t=BWzH9M6bWmPExfHMwKBMtNEDfPIcqhxTxeRvCVqUc7I"
  return (
    <>
      <h1 className="main-info-heading">Derevyanko Michail CV</h1>
      <Svg />
      <img src={url} alt="Mykhail" width="700px" height="auto" />
      <Info></Info>
    </>
  )
}

export default Main
