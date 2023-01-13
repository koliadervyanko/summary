import React, { FC } from "react"
import Linkedin from "./svg/Linkedin/Linkedin"
import Github from "./svg/github/github"
import "./Footer.scss"
import "./Media.scss"

const Footer: FC = () => {
  return (
    <div className="footer">
      <a
        href="https://ua.linkedin.com/in/michail-derevyanko-a2700948/en?original_referer=https%3A%2F%2Fwww.google.com%2F"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/mderevyankoaqa"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <div className="email">
        <p className="normal">
          For more information write to me at this email:
          <span className="email-link"> m.v.derevyanko@gmail.com</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
