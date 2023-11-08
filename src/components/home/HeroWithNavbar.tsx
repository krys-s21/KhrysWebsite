import React from "react"
import Navbar from "../Navbar"
import heroImage from "../../../assets/heroImage.svg"

const HeroWithNavbar = () => {
  const heroStyles = {
    margin: "15px",
    borderRadius: "30px",
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  const textWrapperStyles = {
    paddingTop: "50px",
    paddingBottom: "120px",
  }
  const titleStyles = {
    fontWeight: "400",
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
          <h1 style={titleStyles}>
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
