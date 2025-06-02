import React from "react"
import Navbar from "../Navbar"
import heroImage from "/assets/images/heroImage.svg"
import { useMediaQuery } from "usehooks-ts"

const HeroWithNavbar = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")
  const matchesMin992 = useMediaQuery("(min-width: 992px)")
  const matchesMin1200 = useMediaQuery("(min-width: 1200px)")
  const matchesMin1500 = useMediaQuery("(min-width: 1500px)")

  const heroStyles = matchesMin992
    ? {
        margin: "15px",
        borderRadius: "30px",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : {
        margin: "15px",
        borderRadius: "30px",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repat",
        backgroundPosition: "10% 50%",
        backgroundSize: "cover",
      }
  const textWrapperStyles = matchesMin992
    ? {
        paddingTop: "50px",
        paddingBottom: "120px",
      }
    : {
        paddingTop: "10px",
        paddingBottom: "15px",
      }
  const titleStyles = {
    fontWeight: "400",
  }
  const heyStyles = matchesMin992
    ? {
        display: "block",
        marginBottom: "3rem",
      }
    : {
        display: "block",
        marginBottom: "1rem",
      }
  const highligtedStyles = matchesMin992
    ? {
        fontSize: "4.5rem",
        fontWeight: "500",
      }
    : {
        fontSize: "2rem",
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
