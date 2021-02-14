import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
/** @jsx jsx */
import { Grid, jsx } from "theme-ui"

const Header = () => {
  return (
    <Grid sx={{ placeItems: "center" }}>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          sx={{ width: "90%", height: "auto", pl: "10%" }}
        />
      </Link>
    </Grid>
  )
}

export default Header
