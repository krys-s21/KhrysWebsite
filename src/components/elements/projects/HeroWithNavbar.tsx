import React from "react"
import Navbar from "../Navbar"
import heroImage from "/images/heroImage.svg"
import { useMediaQuery } from "usehooks-ts"

const HeroWithNavbar = () => {
  const matchesMin992 = useMediaQuery("(min-width: 992px)")

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
  return (
    <header style={heroStyles}>
      <div className="container">
        <Navbar />
        <div className="textWhite" style={textWrapperStyles}>
          <h1 style={titleStyles}>
            <span style={heyStyles}>My projects</span>
          </h1>
        </div>
      </div>
    </header>
  )
}
export default HeroWithNavbar
