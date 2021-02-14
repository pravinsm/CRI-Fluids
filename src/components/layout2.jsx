import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Grid } from "theme-ui"
import three from "../images/3.png"

const Layout2 = () => {
  // const [Txt, setTxt] = useState("")
  const textarr = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    " OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    " MARINE & DEFENCE",
    " METAL & MINING",
    "FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    " BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ]
  // let text = []
  // useEffect(() => {
  //   for (let i = 0; i < textarr.length - 1; i++) {
  //     text.push(
  //       <span>
  //         {textarr[i]}
  //         <span sx={{ color: "primary" }}> | </span>
  //       </span>
  //     )
  //   }
  //   text.push(textarr[textarr.length - 1])
  //   setTxt(text)

  // }, [])
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <p sx={{ marginLeft: ["15px", "15px", "30px"] }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <Grid sx={{ placeItems: "center", textAlign: "center" }}>
        <img src={three} alt="three" sx={{ width: ["86%"], height: "auto" }} />
        <p sx={{ fontSize: ["6px", "9px", "12px", "15px"] }}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr width="96%" sx={{ borderColor: "primary" }} />
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p sx={{ width: "95%" }}>
          {textarr.map(x => (
            <span>
              {x}
              <span
                sx={{
                  color: "primary",
                  display: `${x === "AGRICULTURE & RESIDENTIAL" ? "none" : ""}`,
                }}
              >
                {" "}
                |{" "}
              </span>
            </span>
          ))}
        </p>
      </Grid>
    </Flex>
  )
}

export default Layout2
