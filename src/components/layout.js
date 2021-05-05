import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const layout = ({ children }) => (
  <>
  <div id="wrapper">
    <Header />
      <main>
        {children}
      </main>
    <Footer />
  </div>
  </>
)

export default layout