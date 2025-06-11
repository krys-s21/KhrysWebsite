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
        marginBottom: "-200px",
      }
    : {
        margin: "15px",
        borderRadius: "30px",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repat",
        backgroundPosition: "10% 50%",
        backgroundSize: "cover",
        marginBottom: "-200px",
      }
  const textWrapperStyles = matchesMin992
    ? {
        paddingTop: "50px",
        paddingBottom: "200px",
      }
    : {
        paddingTop: "10px",
        paddingBottom: "200px",
      }
  const titleBaseStyles = {
    display: "block",
    fontWeight: "500",
  }
  const titleStyles = matchesMin992
    ? {
        ...titleBaseStyles,
        marginBottom: "3rem",
      }
    : {
        ...titleBaseStyles,
        marginBottom: "1rem",
      }
  const subtitleStyles = matchesMin992
    ? {
        fontSize: "3.214rem",
      }
    : {
        fontSize: "1.5rem",
      }

  return (
    <header id="header" style={heroStyles}>
      <div className="container">
        <Navbar />
        <div className="textWhite" style={textWrapperStyles}>
          <h1 style={titleStyles}>My Portfolio</h1>
          <p style={subtitleStyles}>
            I’ve worked with development companies and as a freelancer to bring
            impactful projects to life — explore a few of them here.
          </p>
        </div>
      </div>
    </header>
  )
}
export default HeroWithNavbar
