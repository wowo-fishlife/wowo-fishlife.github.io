import React from "react"
import Layout from "../components/layout"
import Door from "../components/animation.js"
import "../styles/style.css"


export default function Home() {
  return(
  <Layout>
    <Door></Door>
    <div>
      <section>
        <h3>News</h3>
        <p>2021.5.5 Renewed!</p>
        <p>[Installed: gatsby.js]</p>
      </section>
      <section>
        <h3>Profile</h3>
        <p>
        </p><h4>[haxibami / 榛.]<br /></h4>
        Student (Senior High at Komaba, Univ. of Tsukuba → The Univ. of Tokyo Junior Division, Humanity and Social sciences I)
        <p />
        <p>学生。興味があったりなかったりする。無系。</p>
      </section>
      <section>
        <h3>Interests</h3>
        <p>all the authenticities.</p>
        <p>言語芸術、技術、地理、認知など</p>
      </section>
      <section>
        <h3>Awards/Qualifications</h3>
        <p>JGeO'19銀,'20&amp;'21金 / JESO'19本</p>
      </section>
      {/*<section>
      <h3>Projects</h3>
        <p><span class ="eng">Short-Range: </span></p>
    </section>*/}
      <section>
        <h3>Links</h3>
        <address>Contact: <a href="mailto:soyuz.utuki@gmail.com">soyuz.utuki@gmail.com</a></address>
        <ul>
          <li>Twitter: <a href="https://twitter.com/haxibami">@haxibami</a></li>
          <li>Blog: <a href="https://wowo-fishlife.hatenablog.jp">はてな1</a></li>
          <li>Blog2: <a href="https://haxibami.hatenablog.jp">はてな2</a></li>
          <li>Tanka: <a href="https://utakatanka.jp/kajin/1102">utakata</a></li>
          <li>Discord: haxibami#5072</li>
        </ul>
      </section>
      <section>
        <h3>Works</h3>
        <p><span className="eng">Translations: </span>「<a href="https://drive.google.com/drive/folders/1lMhJQ5GxXyp0OvS1mloBiaamVuAApNxW?usp=sharing" target="_blank" rel="noopener noreferrer">カルタゴの薔薇</a>」、ケン・リュウ - Carthaginian Rose, Ken Liu</p>
      </section>

    </div>
  </Layout>
  )  
}
