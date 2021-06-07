import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./animation.scss"


const Door = () => {
  const Poems = useStaticQuery(
    graphql`
      query MyQuery {
        allDataJson {
          edges {
            node {
              poems {
                en
                jp
              }
            }
          }
        }
      }`);

  const poemset = [];
  Poems.allDataJson.edges[0].node.poems.forEach(element => {
    poemset.push(element)
  });

  const max = poemset.length - 1
  const min = 0
  console.log(max)
  let i = Math.floor( Math.random() * (max + 1 - min));
  let jppoem = poemset[i].jp
  let enpoem = poemset[i].en

        return ( 
          <div class="door">
            <div class="bullet1">
              {jppoem}
            </div>
            <div class="bullet2">
              {enpoem}
            </div>
          </div>
        );
}

export default Door;
