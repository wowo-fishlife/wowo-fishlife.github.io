import React from "react"
import * as Styles from "./footer.module.css"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

const footer = () => (
  <footer>
    <hr className={Styles.footerline} />
    <div className={Styles.footerbox}>
      <a className={Styles.twitter} href="https://twitter.com/haxibami" target="_new"><FontAwesomeIcon icon={faTwitterSquare} /></a>
      <div className={Styles.footericonbox}>
        <div className={Styles.footericon}><Link to="/"><StaticImage src="../images/apple_icon.jpeg" alt="御真影" style={{borderRadius: 10}} /></Link></div>
      </div>
      <a className={Styles.github} href="https://github.com/haxibami" target="_new"><FontAwesomeIcon icon={faGithubSquare} /></a>
    </div>
    <div className={Styles.copyright}>
      Copyright © 2019-2021 haxibami, All rights reserved.
    </div>
  </footer>
)

export default footer