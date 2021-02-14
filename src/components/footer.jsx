import React from "react"
import { Box, Flex, Grid } from "theme-ui"
/** @jsx jsx */
import { jsx } from "theme-ui"
import call from "../images/call.png"
import facebook from "../images/facebook.png"
import web from "../images/web.png"

const Footer = () => {
  return (
    <Grid p={2} sx={{ placeItems: "center" }}>
      <Flex
        sx={{
          width: "100%",
          justifyContent: "space-around",
          fontSize: ["1.6vw", "1.8vw", "14px", "16px"],
        }}
        p={4}
        color="white"
        bg="primary"
      >
        <div>
          <img
            src={call}
            alt="call"
            sx={{ width: ["10px", "12px", "24px", "28px"] }}
          />
          <span>
            &nbsp;Toll free <b>1800 200 1234</b>
          </span>
        </div>

        <div>
          <img
            src={facebook}
            alt="facebook"
            sx={{ width: ["10px", "12px", "24px", "28px"] }}
          />
          <span>&nbsp;www.facebook.com/cripumps</span>
        </div>
        <div>
          <img
            src={web}
            alt="web"
            sx={{ width: ["10px", "12px", "24px", "28px"] }}
          />
          <span>&nbsp;www.crigroups.com</span>
        </div>
      </Flex>
    </Grid>
  )
}

export default Footer
