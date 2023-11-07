import React from "react"
import Navbar from "./Navbar"

const HeroWithNavbar = () => {
  const heroStyles = {
    margin: "15px",
    borderRadius: "30px",
    backgroundColor: "purple",
  }
  const textWrapperStyles = {
    paddingTop: "50px",
    paddingBottom: "120px",
  }
  const heyStyles = {
    display: "block",
    marginBottom: "3rem",
  }
  const highligtedStyles = {
    fontSize: "4.5rem",
    fontWeight: "500",
  }
  const highligtedStylesWithXMargin = {
    ...highligtedStyles,
    margin: "20px",
  }
  const highligtedStylesWithLeftMargin = {
    ...highligtedStyles,
    marginLeft: "20px",
  }
  return (
    <header style={heroStyles}>
      <div className="container">
        <Navbar />
        <div className="textWhite" style={textWrapperStyles}>
          <h1>
            <span style={heyStyles}>Hey there!</span>
            <div>
              I'm
              <span style={highligtedStylesWithLeftMargin}>Khrys</span>,
            </div>
            <div>
              a
              <span style={highligtedStylesWithXMargin}>
                Frontend Developer
              </span>
            </div>
            with true passion for
            <span style={highligtedStylesWithLeftMargin}>UX/UI</span>.
          </h1>
        </div>
      </div>
    </header>
  )
}
export default HeroWithNavbar
