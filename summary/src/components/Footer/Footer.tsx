import React, { FC } from "react";
import Linkedin from "./svg/Linkedin/Linkedin";
import Github from "./svg/github/github";

const Footer: FC = () => {
  return (
    <div className="footer">
      <a
        href="https://ua.linkedin.com/in/michail-derevyanko-a2700948/en?original_referer=https%3A%2F%2Fwww.google.com%2F"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a href="https://github.com/mderevyankoaqa" target="_blank">
        <Github />
      </a>
    </div>
  );
};

export default Footer;
