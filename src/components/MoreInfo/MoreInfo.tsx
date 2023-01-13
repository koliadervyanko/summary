import React, { FC } from "react"
import Education from "./Education/Education"
import WE from "./Work Experience/WE"
import DomainAreas from "./DomainAreas/DomainAreas"
import ProjectExperience from "./ProjectExperience/ProjectExperience"
import ForeignLanguages from "./ForeignLanguages/ForeignLanguages"

const MoreInfo = () => {
  return (
    <>
      <ForeignLanguages />
      <Education />
      <WE />
      <DomainAreas />
      <ProjectExperience />
    </>
  )
}

export default MoreInfo
