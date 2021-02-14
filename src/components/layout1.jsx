import React from "react"
import { Flex, Box } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"
import one from "../images/1.png"
import two from "../images/2.png"

const Layout1 = () => {
  return (
    <Flex sx={{ flexDirection: ["column", "column", "row"] }}>
      <Box sx={{ flex: "0.35" }}>
        <Flex sx={{ justifyContent: "center" }}>
          <img
            src={one}
            alt="one"
            sx={{ width: ["70%", "70%", "110%", "87%"], height: "auto" }}
          />
        </Flex>
      </Box>
      <Box sx={{ flex: "0.65", marginLeft: ["15px", "15px", "0px"] }}>
        <h3>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>

        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={two} alt="two" sx={{ width: "95%", height: "auto" }} />
        <p>
          Government of India has awarded the{" "}
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </Box>
    </Flex>
  )
}

export default Layout1
