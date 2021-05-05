import React from "react"
import * as Styles from "./header.module.css"

const header = () => (
  <header>
      <div className={Styles.headerbox}>
        <h1 className={Styles.title}>狂乱词好</h1>
        <h2 className={Styles.subtitle}>Lyriqult, with <span className={Styles.accent}>Love</span>.</h2>
      </div>
  </header>
)

export default header