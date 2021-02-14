import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Header from "../components/header"
import Layout1 from "../components/layout1"
import Layout2 from "../components/layout2"
import Footer from "../components/footer"

const IndexPage = () => (
  <div
    className="layout"
    sx={{
      background: "linear-gradient(#fff,#FFF9B3)",
      minHeight: "100vh",
    }}
  >
    <Header></Header>
    <Layout1></Layout1>
    <Layout2></Layout2>
    <Footer></Footer>
  </div>
)

export default IndexPage
